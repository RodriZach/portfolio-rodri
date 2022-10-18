import React from 'react';
import { Grid, Typography } from '@mui/material';
import Flip from 'react-reveal/Flip';
import Button from '@mui/material/Button';
import style from './Home.module.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            main: '#00838F',
            darker: '#053e85',
        },
        neutral: {
            main: '#37474F',
            contrastText: '#fff',
        },
    },
});

export default function Contact() {
    return (
        <ThemeProvider theme={theme}>
        <div id="contact" className={style.contact}>
            <Flip left>
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={8}
                >
                    <Grid item xs={7}>
                        <Typography variant="h4" align="center" color="white">
                            Contact
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h6" align="center" color="#E0F7FA">
                            ¿Te gustan mis trabajos?
                        </Typography>
                    </Grid>
                    <Grid item xs={5}>         
                            <Button href="mailto:rodri_h87@hotmail.com" color="primary" variant="contained">Contactame</Button>
                    </Grid>
                </Grid>
            </Flip>
        </div>
        </ThemeProvider>
    )
}