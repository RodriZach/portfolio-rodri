import React from 'react';
import Typewriter from 'typewriter-effect';
import style from './Home.module.css'
import rodri from '../Asset/Rodri.jpeg'
import { Grid } from '@mui/material';
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import Button from '@mui/material/Button';
import HeadShake from 'react-reveal/HeadShake';
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

export default function Home() {
    return (
        <ThemeProvider theme={theme}>
            <div id="home" className={style.container}>
                <div className={style.photocontainer}>
                    <img className={style.photo} src={rodri} alt="" />
                </div>
                <div className={style.type}>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "Hi! I´m Rodrigo",
                                "I´m a Full Stack Web Developer",
                                "Welcome to my page!"
                            ]
                        }}
                    />
                </div>
                <Grid container direction="row" justifyContent="center" alignItems="center">

                    <a href="https://www.linkedin.com/in/rodrigo-hernandez-4a8b5523b" target="_blank">
                        <AiFillLinkedin className={style.icono} />
                    </a>

                    <a href="https://github.com/RodriZach" target="_blank">
                        <AiFillGithub className={style.icono} />
                    </a>

                </Grid>
                <div className={style.button}>
                    <Grid container justifyContent="center" alignItems="center">
                        <HeadShake>
                            <Button href="/data/CV Luis Rodrigo Hernandez.pdf" download="CV Luis Rodrigo Hernandez.pdf" color="primary" variant="contained">Descarga mi CV</Button>
                        </HeadShake>
                    </Grid>
                </div>
            </div>
        </ThemeProvider>
    )
}