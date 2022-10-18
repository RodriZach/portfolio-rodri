import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-scroll';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#26C6DA',
      darker: '#053e85',
    },
    neutral: {
      main: '#37474F',
      contrastText: '#fff',
    },
  },
});



export default function NavBar() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="neutral">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} color="primary">
              Luis Rodrigo Hernández
            </Typography>
            <Link to="about" spy={true} smooth={true} offset={-30} duration={500}>
              <Button color="primary" >About</Button>
            </Link>
            <Link to="skills" spy={true} smooth={true} offset={-30} duration={500}>
              <Button color="primary" >Skills</Button>
            </Link>
            <Link to="projects" spy={true} smooth={true} offset={-30} duration={500}>
              <Button color="primary" >Projects</Button>
            </Link>
            <Link to="contact" spy={true} smooth={true} offset={-20} duration={500}>
              <Button color="primary" >Contact</Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  )
}