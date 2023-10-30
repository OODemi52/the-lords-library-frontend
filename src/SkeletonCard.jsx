import {
  Box,
  Grid,
  Skeleton
} from "@mui/material";


const SkeletonCard = () =>  {

return (
            <Grid container spacing={2} sx={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderRadius: 1, backgroundColor: 'hsl(200, 20%, 90%)', }}>
              
              {/* Item Media */}
              <Grid item xs={12} md={3} lg={3} xl={3} sx={{ borderRadius: 1, width: '100%', height: 225, backgroundColor: 'hsl(200, 20%, 95%)',}} ></Grid>

              {/* Item Info */}
              <Grid item sx={{ ml: 5, display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "left", alignItems: "flex-start", }}>
                <Skeleton animation='wave' variant='rounded' height={45} sx={{ width: '80%', }} />
                <br />
                <br />
                <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                  <Skeleton animation='wave' variant="circular" width={15} height={15} sx={{ mr: 1, }} />
                  <Skeleton animation='wave' variant='rounded' width={150} height={15} sx={{ width: '80%', }} />
                </Box>
                <br />
                <Skeleton animation='wave' variant='rounded' height={15} sx={{ mb: 1, width: '80%', }} />
                <Skeleton animation='wave' variant='rounded' height={15} sx={{ mb: 3, width: '80%', }}/>
              </Grid>

              {/* Item Buttons */}
              <Grid item sx={{ display: "flex", flexDirection: "column", alignContent: "right", pr: "1rem", }}>
                <Skeleton animation='wave'  variant='rounded' width={95} height={2} sx={{ p: 2, m: 1, borderRadius: 4, width: 95, height: 2, }} />
                <Skeleton animation='wave' variant='rounded' width={95} height={2} sx={{ p: 2, m: 1, mb:3 }} />
              </Grid>

            </Grid>
  );
}


  export default SkeletonCard;