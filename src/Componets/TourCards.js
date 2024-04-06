import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from './img/react.jpeg';
import { Rating } from '@mui/material';
import { AccessTime, Timeline } from "@mui/icons-material";
 const TourCard = ({tours,key}) => {
    return (
        <>
        <Grid  xs={12} lg={3} sm={6}  sx={{paddingX:2,paddingY:2}}>
            <Paper><img src={tours.image} width={225} height={225} />
            <Box padding={1}>
            <Typography variant="h6" >{tours.name}</Typography>
             <Grid container alignItems={"center"} >
             <AccessTime sx={{paddingRight:1}}/>
             <Typography variant="body2">{tours.duration}</Typography>
             </Grid>
            <Grid container justifyContent={"space-between"}>
            <Rating readOnly={true} defaultValue={4.5} precision={0.5} />
                <span>{tours.rating} ({tours.numberOfReviews})</span>
             <Typography variant="h4" marginTop={2}>{tours.price}</Typography>
            </Grid>
            </Box>
            </Paper>    
        </Grid>
        </>
    )
 }
 export default TourCard;