import { ThemeProvider } from "@emotion/react";
import { CheckBox } from "@mui/icons-material";
import { Box, Container, Grid, Radio, TextField, Typography, createTheme,Button } from "@mui/material";
import { orange } from "@mui/material/colors";
import { TextareaAutosize } from "@mui/material";
import { useEffect } from "react";
import { Await } from "react-router-dom";
const theme = createTheme ({
    Status:{
        danger:orange[600],
    }    
})
const inputStyle = {
    display:'flex',
    marginX:1,
    marginY:1,
    bgcolor:"#fff",
    
}
const Contact = (props) => {
    const API = "https://dummy.restapiexample.com/api/v1/employees";
    const fetchapi = async (url) => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data)
        } catch (error) {
            console.log("hello")
        }
    }
    useEffect(()=> {
        fetchapi(API)
    },[])
   
    return (
        <>
        <Container sx={{bgcolor:'#cfe8fc',height:'100%',borderRadius:3,marginTop:4}} >
        <ThemeProvider theme={theme}>
            <Radio defaultChecked/>
        </ThemeProvider>
        <Box sx={{display:"flex",flexDirection:"column",padding:5}}>
            <Typography variant="h3" component="h1" sx={{paddingBottom:3}}>
                {props.title}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} lg={6} sm={6} >
                    <TextField  borderRadius={6}  sx={inputStyle}  fullWidth id="fname" label="First Name" />
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <TextField sx={inputStyle} fullWidth id="lname" label="Last Name" />
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <TextField  sx={inputStyle} fullWidth id="email" label="Email Name" />
                </Grid>
                <Grid item xs={12} lg={6} sm={6}>
                    <TextField  sx={inputStyle} fullWidth id="Phone" label="Phone" />
                </Grid>
                <Grid item xs={12} >
                    <TextField  sx={inputStyle} fullWidth id="address" label="Adress" />
                </Grid>
                <Grid item xs={12} >
                    <TextField minRow={5} sx={inputStyle}  fullWidth id="mss" label="Massage" />
                </Grid>
                <Button variant="contained" sx={{display:'flex',margin:"0 auto",marginTop:3}} >Submit</Button>
            </Grid>
        </Box>
        </Container>
        </>
    )
}
export default Contact;