import React from 'react'
import { AiFillUpCircle } from 'react-icons/ai';
import style from './Home.module.css'
import { Link } from 'react-scroll';
import { Grid, Typography } from '@mui/material';

export default function Footer() {
    return (
        <div className={style.footer}>
            <Grid container direction="column" justifyContent="center" alignItems="center" spacing={4}>
                <Grid item xs>
                    <Link to="home" spy={true} smooth={true} offset={-30} duration={500}>
                        <AiFillUpCircle className={style.icono} />
                    </Link>
                </Grid>
                <Grid item xs>
                    <Typography variant="caption text" align="center" color="#9E9E9E">
                    © 2022 - Developed by Luis Rodrigo Hernández
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}