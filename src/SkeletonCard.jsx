import {
  Card,
  Box,
  Chip,
  Button,
} from "@mui/material";

const SkeletonCard = () => (
    <Card
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(15, 82, 185, 0.85)",
        boxShadow: 10,
        borderRadius: 1,
        border: 0.5,
        borderColor: "#1848a0",
        height: 200, // Adjust the height as needed
      }}
    >
      {/* Add skeleton elements */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "left",
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            display: "flex",
            color: "white",
            height: 30, // Adjust the height as needed
            width: "80%", // Adjust the width as needed
            bgcolor: "rgba(255, 255, 255, 0.3)", // Adjust the background color as needed
            borderRadius: 4,
            marginBottom: 10, // Adjust the margin as needed
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            height: 20, // Adjust the height as needed
            width: "60%", // Adjust the width as needed
            bgcolor: "rgba(255, 255, 255, 0.3)", // Adjust the background color as needed
            borderRadius: 4,
            marginBottom: 10, // Adjust the margin as needed
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            height: 20, // Adjust the height as needed
            width: "90%", // Adjust the width as needed
            bgcolor: "rgba(255, 255, 255, 0.3)", // Adjust the background color as needed
            borderRadius: 10,
          }}
        ></Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignContent: "right",
          pr: "1rem",
        }}
      >
        <Chip
          label={`Available: Loading...`}
          variant="outlined"
          sx={{
            p: 2,
            m: 1,
            bgcolor: "#ccff90",
            border: 1,
            borderColor: "#64dd17",
            color: "#424242",
            boxShadow: 2,
          }}
        />
        <Button
          variant="contained"
          disabled
        >
          Loading...
        </Button>
      </Box>
    </Card>
  );

  export default SkeletonCard;