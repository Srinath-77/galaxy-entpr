import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Fade,
  Avatar,
} from '@mui/material';
import { Business, Factory, PrecisionManufacturing, Engineering, Build, Construction } from '@mui/icons-material';

const ClientsSection = () => {
  const clients = [
    {
      name: 'Adhi Arihant Press Tool',
      icon: <PrecisionManufacturing sx={{ fontSize: 40 }} />,
      color: '#e53935',
    },
    {
      name: 'KUSAUTO INDIA PVT LTD',
      icon: <Engineering sx={{ fontSize: 40 }} />,
      color: '#1976d2',
    },
    {
      name: 'Longnew India Pvt Ltd',
      icon: <Factory sx={{ fontSize: 40 }} />,
      color: '#424242',
    },
    {
      name: 'Nikita Containers Pvt Ltd',
      icon: <Business sx={{ fontSize: 40 }} />,
      color: '#0288d1',
    },
    {
      name: 'Pro Candour Automotive System Pvt Ltd',
      icon: <Build sx={{ fontSize: 40 }} />,
      color: '#00acc1',
    },
    {
      name: 'Crowntech Surface Finishings Pvt Ltd',
      icon: <Construction sx={{ fontSize: 40 }} />,
      color: '#ff9800',
    },
    {
      name: 'FD ELECTRO PLATERS',
      icon: <Factory sx={{ fontSize: 40 }} />,
      color: '#1976d2',
    },
    {
      name: 'Star Electroplaters Pvt Ltd',
      icon: <PrecisionManufacturing sx={{ fontSize: 40 }} />,
      color: '#1976d2',
    },
    {
      name: 'Pondy Polymers',
      icon: <Engineering sx={{ fontSize: 40 }} />,
      color: '#1976d2',
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h2"
          textAlign="center"
          sx={{ mb: 2, color: 'primary.main' }}
        >
          Our Trusted Partners and Clients
        </Typography>
        <Typography
          variant="h6"
          textAlign="center"
          sx={{ mb: 6, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
        >
          We are proud to work with industry leaders who trust us to deliver 
          exceptional results and maintain the highest standards of quality.
        </Typography>

        <Grid container spacing={3}>
          {clients.map((client, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Fade in timeout={1000 + index * 100}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    p: 3,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      '& .client-avatar': {
                        transform: 'scale(1.1)',
                        boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                      },
                    },
                  }}
                >
                  <Avatar
                    className="client-avatar"
                    sx={{
                      width: 80,
                      height: 80,
                      mb: 2,
                      backgroundColor: client.color,
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                    }}
                  >
                    {client.icon}
                  </Avatar>
                  <CardContent sx={{ flexGrow: 1, pt: 0 }}>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                        lineHeight: 1.3,
                      }}
                    >
                      {client.name}
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

export default ClientsSection;