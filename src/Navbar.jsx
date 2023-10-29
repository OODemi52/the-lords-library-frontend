import SearchField from "./SearchField";
import { Container, Box } from "@mui/material";
import logo from "./LordsLibraryLogo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Container
      sx={{
        mb: 3,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to={`/`} style={{ textDecoration: 'none' }}>
        <Box
          component="img"
          sx={{
            height: 75,
            width: 75,
          }}
          alt="Logo"
          src={logo}
          href="#"
        />
      </Link>

      <Box
        sx={{
          alignSelf: "end",
        }}
      >
        <SearchField />
      </Box>
    </Container>
  );
}
