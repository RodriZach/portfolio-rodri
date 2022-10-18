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
                        <Typography variant="h6" align="center" color="#B2DFDB">
                            Acá va el about asdf lkjasldj fajsf lajs dflkjs dañl kjgalk gmljsda glkn as dfñlj atñsdhjg flñkn asd ñlghj ñalsh jd gñlj asda
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h6" align="center" color="#B2DFDB">
                            Acá va el párrafo 1 Lo que me gusta hacer es estudiar y trabajar mucho, lo hago todo el tiempo
                        </Typography>
                    </Grid>
                    <Grid item xs={7}>
                        <Typography variant="h6" align="center" color="#B2DFDB">
                            Acá va el párrafo 2 asdflk jasl djf ajsfla jsdfl kjsdañ lkjgalk gmljsda glkn asdfñl jatñsdhjgf lñknasdñl ghjñ al shjdgñljasda sdfasdg adfhfgja fdhjgag hfgfjsagf dhfghj kstrahbfg jsafggjsrfg gjsag dfhs hgad fhagg y ademas hago otrtas coass como cocinar y eso
                        </Typography>
                    </Grid>
                </Grid>
            </Flip>
            <br /> <br />
        </div>

    )
}