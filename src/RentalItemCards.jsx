import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';
import {
  Card,
  CardMedia,
  Stack,
  Container,
  Box,
  Typography,
  Chip,
  styled,
} from "@mui/material";
import ReserveButton from './ReserveButton';
import SkeletonCards from './SkeletonCards';

// Styled components
const ResponsiveContainer = styled(Container)({
  '@media (max-width: 600px)': {
    padding: '8px',
  },
});

const ResponsiveCard = styled(Card)({
  '@media (max-width: 600px)': {
    height: 'auto',
    flexDirection: 'column',
  },
});

const ResponsiveCardMedia = styled(CardMedia)({
  '@media (max-width: 600px)': {
    width: '100%',
    height: 'auto',
    borderRadius: '8px 8px 0 0',
  },
});

const ResponsiveTypography = styled(Typography)({
  '@media (max-width: 600px)': {
    fontSize: '1.5rem',
  },
});

const ResponsiveChip = styled(Chip)({
  '@media (max-width: 600px)': {
    fontSize: '0.8rem',
    padding: '8px',
    margin: '4px',
  },
});

const ResponsiveBox = styled(Box)({
  '@media (max-width: 600px)': {
    ml: 0,
    mt: 2,
  },
});

const RentalItemCards = ({ items }) => {
  if (!Array.isArray(items)) {
    console.error("Invalid 'items' prop. Expected an array.");
    return null;
  }

  if (items.length === 0) {
    return <SkeletonCards numOfCards={6} />;
  }

  return (
    <ResponsiveContainer>
      <Stack>
        {items.map((item, index) => (
          <>
          <ResponsiveCard
            key={index}
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "rgba(15, 82, 185, 0.85)",
              boxShadow: 4,
              borderRadius: 1,
              border: 0.5,
              borderColor: "#1848a0",
              height: '226px',
            }}
          >
            <Link to={`/item/${item._id}`} key={index} style={{ textDecoration: 'none' }}>
              <ResponsiveCardMedia
                component="img"
                sx={{ m: 0, width: 225, height: 226, borderRadius: 1 }}
                image={item.itemImage}
                alt={item.itemName}
              />
            </Link>
            <ResponsiveBox
              sx={{
                ml: { xs: 2, md: 5 },
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                justifyContent: "left",
                alignItems: "flex-start",
              }}
            >
              <Link to={`/item/${item._id}`} key={index} style={{ textDecoration: 'none' }}>
                <ResponsiveTypography
                  sx={{ display: "flex", color: "white" }}
                  variant="h4"
                >
                  {item.itemName}
                </ResponsiveTypography>
              </Link>
              <ResponsiveTypography sx={{ display: "flex", variant: "body" }}>
                {`Category: ${item.itemCategory}`}
              </ResponsiveTypography>
              <ResponsiveTypography sx={{ display: "flex" }}>
                {item.itemDescription}
              </ResponsiveTypography>
            </ResponsiveBox>
            <ResponsiveBox
              sx={{
                display: "flex",
                flexDirection: "column",
                alignContent: "right",
                pr: "1rem",
              }}
            >
              <ResponsiveChip
                label={`Available: ${item.itemQuantity}`}
                variant="outlined"
                sx={{
                  mb: 2,
                  bgcolor: "#ccff90",
                  border: 1,
                  borderColor: "#64dd17",
                  color: "#424242",
                  boxShadow: 2,
                }}
              />
              <ReserveButton item={item} />
            </ResponsiveBox>
          </ResponsiveCard>
          <br />
          </>
        ))}
      </Stack>
    </ResponsiveContainer>
  );
};

RentalItemCards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      itemName: PropTypes.string.isRequired,
      itemDescription: PropTypes.string.isRequired,
      itemCategory: PropTypes.string.isRequired,
      itemImage: PropTypes.string.isRequired,
      itemQuantity: PropTypes.number.isRequired,
    })
  ),
};

export default RentalItemCards;
