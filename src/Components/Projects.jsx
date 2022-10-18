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
            description: "Diseñar y desarrollar una App de razas de perros que incluía: búsquedas, filtrados, ordenamientos, paginado y creación. Desarrollar la App utilizando ReactJS, Redux, CSS puro para el FRONT y Node.js con Express, PostgreSQL y Sequelize en el BACK. ",
            link:"algo",
            github:"https://github.com/RodriZach/PI-Dogs"
        },
        {
            id: 2,
            title: "E-Commerce Coffee´s Order",
            image: coffe,
            description: "El proyecto consistió en una aplicación web E-Commerce de alimentos de tipo cafetería y comidas rápidas, que permite al cliente compras online. Tiene sistema de autenticación y una pasarela de pagos con Mercado Pago integrada. Posee Dashboard de Administrador.Desarrollada por un equipo de 7 personas usando ReactJs, Redux, PostgreSQL, NodeJS, Sequelize, Express, MercadoPago, Firebase, entre otras.",
            link:"https://coffeemainapp.vercel.app/",
            github:"https://github.com/RodriZach/PF-Coffee-main"
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
                                link={item.link}
                                github={item.github}
                            />
                        </div>
                    )
                })}


            </Grid>
            <br /> <br />
        </div>
    )
}