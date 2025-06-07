import React, { useRef } from 'react';
import { AppBar, Toolbar, Button, Typography, ThemeProvider,Box, Avatar, createTheme, useTheme } from '@mui/material';
import CompanyName from './Assets/logo.png'
import HomeComponent from './Pages/Home/feature';
import CompanyListComponent from './Pages/CompanyList/feature';
import ContactDetailsPage from './Pages/ContactUs/feature';
import theme from './theme';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ background: 'white'}}>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            <Button color="primary" onClick={() => scrollToSection(homeRef)}>
              Home
            </Button>
            <Button color="primary" onClick={() => scrollToSection(aboutRef)}>
              About
            </Button>
            <Button color="primary" onClick={() => scrollToSection(contactRef)}>
              Contact
            </Button>
          </Box>
         
          <Box>
          <Avatar 
            alt="Remy Sharp" 
            src={CompanyName} 
            sx={{ width: 40, height: 40 }}/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>

      {/* Sections */}
      <div ref={homeRef} style={{ height: '100vh', backgroundColor: '#f4f4f4' }}>
        <HomeComponent />
      </div>
      <div ref={aboutRef} style={{ backgroundColor: '#f4f4f4' }}>
        <CompanyListComponent />
      </div>
      <div ref={contactRef} style={{ height: '100vh', backgroundColor: 'f4f4f4' }}>
        <ContactDetailsPage />
      </div>
    </ThemeProvider>
    </>
  );
}

export default App;

/**
  <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>

     <AppBar position="sticky">
          <Toolbar>
            <Grid container spacing={2} style={{backgroundColor: 'red'}}>
              <Grid size={{ xs: 10, md: 10 }}>
                <Button color="inherit" onClick={() => scrollToSection(homeRef)}>
                  Home
                </Button>
                <Button color="inherit" onClick={() => scrollToSection(aboutRef)}>
                  About
                </Button>
                <Button color="inherit" onClick={() => scrollToSection(contactRef)}>
                  Contact
                </Button>
              </Grid>
              <Grid size={{ xs: 2, md: 2 }}>
                <Avatar 
                  alt="Remy Sharp" 
                  src={CompanyName} 
                  sx={{ width: 24, height: 24 }}/>
              </Grid>
            </Grid>
            
           
          </Toolbar>
        
      </AppBar>
 */