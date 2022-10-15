import React from 'react';
import { Grid, Typography } from '@mui/material';
import coffe from '../Asset/Coffee2.jpeg';


export default function Projects() {
    return (
        <div>
            <Grid
                container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                spacing={6}
            >
                <Grid item xscontainer justifyContent="space-around" alignItems="center">
                    <Typography variant="h4" align="center" color="white">
                        Projects
                    </Typography>
                </Grid>
                {/*Proyecto 1*/}
                <Grid
                    container
                    item xs
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Grid item xs={4} container justifyContent="space-around" alignItems="center">
                        <img src={coffe} alt="" width="500" height="300" />
                    </Grid>
                    <Grid item xs={4}>
                        <Grid
                            container
                            item xs={12}
                            direction="column"
                            justifyContent="space-around"
                            alignItems="center"
                        >
                            <Grid item xs>
                                <Typography variant="h5" align="center" color="#B2DFDB">
                                    Acá va el titulo
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="subtitle1" align="center" color="#B2DFDB">
                                    Acá va el texto del proyecto asdf lkjasldj fajsf lajs dflkjs dañl kjgalk gmljsda glkn as dfñlj atñsdhjg flñkn asd ñlghj ñalsh jd gñlj asdafajsf lajs dflkjs dañl kjgalk gmljsda glkn as dfñlj atñsdhjg flñkn asd ñlghj ñalsh jd gñlj asda
                                </Typography>
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>
                {/*Proyecto 2*/}
                <Grid
                    container
                    item xs
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Grid item xs={4}>
                        <Grid
                            container
                            item xs={12}
                            direction="column"
                            justifyContent="space-around"
                            alignItems="center"
                            
                        >
                            <Grid item xs>
                                <Typography variant="h5" align="center" color="#B2DFDB">
                                    Acá va el titulo
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="subtitle1" align="center" color="#B2DFDB">
                                    Acá va el texto del proyecto asdf lkjasldj fajsf lajs dflkjs dañl kjgalk gmljsda glkn as dfñlj atñsdhjg flñkn asd ñlghj ñalsh jd gñlj asdafajsf lajs dflkjs dañl kjgalk gmljsda glkn as dfñlj atñsdhjg flñkn asd ñlghj ñalsh jd gñlj asda
                                </Typography>
                            </Grid>


                        </Grid>
                    </Grid>
                    <Grid item xs={4} container justifyContent="space-around" alignItems="center">
                        <img src={coffe} alt="" width="500" height="300" />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}