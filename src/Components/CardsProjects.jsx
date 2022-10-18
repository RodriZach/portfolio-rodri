import React from 'react';
import { Grid, Typography } from '@mui/material';
import Flip from 'react-reveal/Flip';

export default function CardsProjects({ title, image, description }) {

    return (
        <Flip left>
            <Grid
                container
                item xs
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <Grid item xs={4} container justifyContent="space-around" alignItems="center">
                    <img src={image} alt="" width="500" height="300" />
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
                                {title}
                            </Typography>
                        </Grid>
                        <Grid item xs>
                            <Typography variant="subtitle1" align="center" color="#B2DFDB">
                                {description}
                            </Typography>
                        </Grid>


                    </Grid>
                </Grid>
            </Grid>
        </Flip>
    )
}