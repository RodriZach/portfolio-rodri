import { Grid, Typography } from '@mui/material';
import * as React from 'react';
import Flip from 'react-reveal/Flip';
import style from './Home.module.css'


export default function About() {
    return (
        <div id="about" className={style.div}>
            <Flip left>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={6}
                >
                    <Grid item xs={7}>
                        <Typography variant="h4" align="center" color="white">
                            About me
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h6" align="center" color="#E0F7FA">
                        Me considero una persona con iniciativa, proactivo, responsable, respetuoso, con pensamiento crítico, autónomo y con ganas de trabajar en equipo.
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h6" align="center" color="#E0F7FA">
                        Apasionado por la música y la creatividad. Encontré en la programación un mundo donde aprender y crear, y se ha vuelto una pasión en mi vida. 
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h6" align="center" color="#E0F7FA">
                        Mi próximo objetivo es seguir aprendiendo nuevas tecnologías y formar parte de un equipo de trabajo donde pueda desarrollarme como profesional y como persona.
                        </Typography>
                    </Grid>
                </Grid>
            </Flip>
            <br /> <br />
        </div>

    )
}