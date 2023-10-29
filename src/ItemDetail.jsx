import { useParams } from 'react-router-dom';
import ItemInfoBox from './ItemInfoBox';
import ReservationInfoBox from './ReservationInfoBox';
import { Container, Button, Grid, ImageList, ImageListItem} from '@mui/material';
import PropTypes from 'prop-types'; 

export default function ItemDetail({ items }) {

  const { _id } = useParams();
  const item = items.find((item) => item._id === _id);

  if (!item) {
    return <div>Loading...</div>;
  }

  const itemData =[
    { 
      id: 1,
      img: item.itemImage,
      title: item.itemName,
    },
    { 
      id: 2,
      img: item.itemImage,
      title: item.itemName,
    },
    { 
      id: 3,
      img: item.itemImage,
      title: item.itemName,
    },
    { 
      id: 4,
      img: item.itemImage,
      title: item.itemName,
    },
    { 
      id: 5,
      img: item.itemImage,
      title: item.itemName,
    }
    ]


  return (
    <>
    <Button onClick={() => window.history.back()}>Back</Button>
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(15, 82, 185, 0.5)",
        boxShadow: 10,
        borderRadius: 1,
        border: 0.5,
        borderColor: "#1848a0",
        }}
    >
<Grid container spacing={1}>
    <Grid item xs={12}>
      <h1>{item.itemName}</h1>
    </Grid>
    <Grid item xs={1}>
      <p>⚪️</p>
    </Grid>
    <Grid item xs={11}>
      <h3>{item.itemCategory}</h3>
    </Grid>
        {/* Main Image */}
        <Grid item xs={12} md={6}>
          {itemData.length > 0 && (
            <img
              src={itemData[0].img}
              alt={itemData[0].title}
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </Grid>

        {/* Small Images */}
        <Grid item xs={12} md={6}>
          <ImageList sx={{ width: '100%', height: '100%' }} variant="quilted" cols={2} rowHeight={164}>
            {itemData.slice(1, 5).map((item) => (
              <ImageListItem key={item.id}>
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', borderRadius: 3 }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <ItemInfoBox />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
        <ReservationInfoBox />
        </Grid>
      </Grid>
  </Container>
</>
  );
}

ItemDetail.propTypes = {
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