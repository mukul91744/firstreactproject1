import { Box, Container } from "@mui/material";
import Image from './img/react.jpeg';
import ImageList from "./ImageLIst";
import IMageCard from "./ImageCard";
const About = ({}) => {
    return (
        <>
        <Container >
            <Box sx={{display:"flex"}}>
                <img src={Image} width={800} height={400} />
                <IMageCard />
            </Box>
            <ImageList />
        </Container>
        </>
    )
}
export default About;