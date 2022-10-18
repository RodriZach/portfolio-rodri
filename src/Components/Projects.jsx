import React from 'react';
import { Grid, Typography } from '@mui/material';
import coffe from '../Asset/Coffee2.jpeg';
import dogs from '../Asset/pidogs.PNG'
import CardProjects from './CardsProjects';
import style from './Home.module.css'


export default function Projects() {
    let myProjects = [
        {
            id: 1,
            title: "SPA Dogs",
            image: dogs,
            description: ["Acá va el texto del proyecto asdf lkjasldj fajsf lajs dflkjs dañl kjgalk gmljsda glkn as dfñlj atñsdhjg flñkn asd ñlghj ñalsh jd gñlj asdafajsf lajs dflkjs dañl kjgalk gmljsda glkn as dfñlj atñsdhjg flñkn asd ñlghj ñalsh jd gñlj asda"]
        },
        {
            id: 2,
            title: "E-Commerce Coffee´s Order",
            image: coffe,
            description: "Acá va el texto del proyecto asdf lkjasldj fajsf lajs dflkjs dañl kjgalk gmljsda glkn as dfñlj atñsdhjg flñkn asd ñlghj ñalsh jd gñlj asdafajsf lajs dflkjs dañl kjgalk gmljsda glkn as dfñlj atñsdhjg flñkn asd ñlghj ñalsh jd gñlj asda"
        }
    ]
    return (
        <div id="projects" className={style.div}>
            <Grid
                container
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                spacing={8}
            >
                <Grid item xscontainer justifyContent="space-around" alignItems="center">
                    <Typography variant="h4" align="center" color="white">
                        Projects
                    </Typography>
                </Grid>
                <br />
                {myProjects?.map(item => {
                    return (
                        <div>
                            <br />
                            <CardProjects
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                description={item.description}
                            />
                        </div>
                    )
                })}


            </Grid>
            <br /> <br />
        </div>
    )
}