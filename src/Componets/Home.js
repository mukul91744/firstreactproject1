import React from 'react';
import { Container, Grid} from '@mui/material';
import Cities from '../Data.json'


import TourCards from '../Componets/TourCards'
const Home = () => {
    return (
        <>
        <Container sx={{marginTop:4}}>
      <Grid container spacing={3}>
      {Cities.map((item) => (
        <>
        {item.tours.map((tour ,index )=> {
          return <TourCards tours={tour} key={index}/>
        })}
        </>
      ))}
      
      </Grid>
      </Container>
        </>
    )
}
export default Home;