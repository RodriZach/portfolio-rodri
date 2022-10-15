import { Grid, Typography } from '@mui/material'
import React from 'react'


export default function Skills() {
    return (
        <div>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={3}
            >
                <Grid item xs>
                    <Typography variant="h4" align="center" color="white">
                        Skills
                    </Typography>
                </Grid>
                <Grid item xs container direction="row" justifyContent="space-evenly" alignItems="center">
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="70" height="70" /> </a>
                    <a href="https://reactjs.org/" > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="70" height="70" /> </a>
                    <a href="https://redux.js.org" > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="70" height="70" /> </a>
                    <a href="https://nodejs.org" > <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" alt="nodejs" width="70" height="70" /> </a>
                    <a href="https://www.postgresql.org" > <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="70" height="70" /> </a>
                </Grid>
                <Grid item xs container direction="row" justifyContent="space-evenly" alignItems="center">
                    <a href="https://expressjs.com" ><img src="https://www.nextontop.com/assets/img/services/web/expressjs.svg" background-color="#ffffff" alt="express" width="70" height="70" /> </a>
                    <a href="https://sequelize.org/"> <img src="https://static-00.iconduck.com/assets.00/file-type-sequelize-icon-443x512-ck0z81j3.png" alt="kotlin" width="70" height="70" /> </a>
                    <a href="https://insomnia.rest/" > <img src="https://raw.githubusercontent.com/get-icon/geticon/master/icons/insomnia.svg" width="70" height="70" /> </a>
                    <a href="https://git-scm.com/" > <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="70" height="70" /> </a>
                    <a href="https://www.w3.org/html/"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="70" height="70" /> </a>
                    <a href="https://www.w3schools.com/css/"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="70" height="70" /> </a>
                </Grid>
            </Grid>

        </div>
    )
}