import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../Asset/Logo.png';
import { Link } from 'react-scroll';
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
      main: '#F9F9F9',
      contrastText: '#fff',
    },
  },
});



export default function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <img  width="60" height="60" src={Logo} alt=""/>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="white" ml={2}>
              Luis Rodrigo Hernández
            </Typography>
            <Link to="about" spy={true} smooth={true} offset={-50} duration={500}>
              <Button size="large" color="neutral" >About</Button>
            </Link>
            <Link to="skills" spy={true} smooth={true} offset={-50} duration={500}>
              <Button size="large" color="neutral" >Skills</Button>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-30} duration={500}>
              <Button size="large" color="neutral" >Projects</Button>
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-20} duration={500}>
              <Button size="large" color="neutral" >Contact</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}