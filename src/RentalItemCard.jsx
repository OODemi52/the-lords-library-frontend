//import React, { useState, useEffect } from 'react'
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
} from "@mui/material";
import ReserveButton from './ReserveButton';

export default function RentalItemCard({ items }) {
    
    if (!Array.isArray(items)) {
        console.error("Invalid 'items' prop. Expected an array.");
        return null;
      }

    if (items.length === 0) {
        return <h3>Nothing To See Here!</h3>;
    }

    return (
      <Container>
        <Stack>
          {items.map((item, index) => (
            <>
              <Card
                key={index}
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
                }}
              >
                <Link to={`/item/${item._id}`} key={index} style={{ textDecoration: 'none' }}>
                <CardMedia
                  component="img"
                  sx={{ m: 0, width: 225, borderRadius: 1 }}
                  image={item.itemImage}
                  alt={item.itemName}
                />
                </Link>
                <Box
                  sx={{
                    ml: 5,
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    justifyContent: "left",
                    alignItems: "flex-start",
                  }}
                >
                    <Link to={`/item/${item._id}`} key={index} style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{ display: "flex", color: "white" }}
                    variant="h4"
                  >
                    {item.itemName}
                  </Typography>
                  </Link>
                  <br />
                  <Typography sx={{ display: "flex", variant: "body" }}>
                    {`Category: ${item.itemCategory}`}
                  </Typography>
                  <Typography sx={{ display: "flex" }}>
                    {item.itemDescription}
                  </Typography>
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
                    label={`Availabe: ${item.itemQuantity}`}
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
                  <ReserveButton item={item} />
                </Box>
              </Card>
              <br />
              </>
          ))}
        </Stack>
      </Container>
    );
}

RentalItemCard.propTypes = {
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