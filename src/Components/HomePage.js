import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  Fade,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { PlayArrow, Build, Engineering, PrecisionManufacturing } from '@mui/icons-material';

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const services = [
    {
      icon: <Build sx={{ fontSize: 40 }} />,
      title: 'Industrial Services',
      description: 'Comprehensive industrial solutions with cutting-edge technology and expertise.',
    },
    {
      icon: <Engineering sx={{ fontSize: 40 }} />,
      title: 'Automotive Excellence',
      description: 'Professional automotive services with skilled technicians and modern equipment.',
    },
    {
      icon: <PrecisionManufacturing sx={{ fontSize: 40 }} />,
      title: 'Precision Engineering',
      description: 'High-precision engineering solutions for complex industrial challenges.',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          overflow: 'hidden',
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            zIndex: 1,
          }}
        />
        
        {/* Content */}
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <Fade in timeout={1000}>
            <Box>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: 'white',
                  mb: 3,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                Highly Skilled and Industry-Trained Workforce
              </Typography>
              <Typography
                variant="h5"
                component="p"
                sx={{
                  color: 'white',
                  mb: 4,
                  opacity: 0.9,
                  maxWidth: '600px',
                  mx: 'auto',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                }}
              >
                Leading the industry with professional automotive and industrial services, 
                delivering excellence through expertise and innovation.
              </Typography>
              <Button
                variant="contained"
                size="large"
                startIcon={<PlayArrow />}
                sx={{
                  backgroundColor: 'white',
                  color: 'primary.main',
                  px: 4,
                  py: 2,
                  fontSize: '1.1rem',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Explore Our Services
              </Button>
            </Box>
          </Fade>
        </Container>

        {/* Animated Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '10%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            animation: 'float 6s ease-in-out infinite',
            '@keyframes float': {
              '0%, 100%': { transform: 'translateY(0px)' },
              '50%': { transform: 'translateY(-20px)' },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '20%',
            right: '15%',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            animation: 'float 8s ease-in-out infinite',
            animationDelay: '2s',
          }}
        />
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          sx={{ mb: 2, color: 'primary.main' }}
        >
          Our Services
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ mb: 6, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
        >
          We provide comprehensive solutions across automotive and industrial sectors
          with unmatched expertise and commitment to excellence.
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Fade in timeout={1000 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    p: 3,
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 2,
                        color: 'primary.main',
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;