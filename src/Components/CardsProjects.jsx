import React from 'react';
import { Grid, Typography } from '@mui/material';
import Flip from 'react-reveal/Flip';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';
import style from './Card.module.css';

export default function CardsProjects({ title, image, description, link, github }) {

    return (
        <div className={style.card}>
            <div className={style.facefront}>
                <img className={style.img} src={image} alt=""/>
            </div>
            <div className={style.faceback}>
                <h3 className={style.title}>{title}</h3>
                <p className={style.description}>{description}</p>
                <div className={style.link}>
                    <a href={link} ><AiFillGoogleCircle className={style.icono}/></a>
                    <a href={github} ><AiFillGithub className={style.icono}/></a>
                </div>
            </div>
        </div>
        // <Flip left>
        //     <Grid
        //         container
        //         item xs
        //         direction="row"
        //         justifyContent="space-around"
        //         alignItems="center"
        //     >
        //         <Grid item xs={4} container justifyContent="space-around" alignItems="center">
        //             <img src={image} alt="" width="500" height="300" />
        //         </Grid>
        //         <Grid item xs={4}>
        //             <Grid
        //                 container
        //                 item xs={12}
        //                 direction="column"
        //                 justifyContent="space-around"
        //                 alignItems="center"
        //             >
        //                 <Grid item xs>
        //                     <Typography variant="h5" align="center" color="#B2DFDB">
        //                         {title}
        //                     </Typography>
        //                 </Grid>
        //                 <Grid item xs>
        //                     <Typography variant="subtitle1" align="center" color="#B2DFDB">
        //                         {description}
        //                     </Typography>
        //                 </Grid>


        //             </Grid>
        //         </Grid>
        //     </Grid>
        // </Flip>
    )
}