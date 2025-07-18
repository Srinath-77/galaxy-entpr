import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Paper,
  Fade,
  useTheme,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
  Business,
} from '@mui/icons-material';

const ContactPage = () => {
  const theme = useTheme();

  const contactInfo = [
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: 'Our Address',
      content: 'G1 Sastha Flats Ars Avenue Ashok Nagar Kanchipuram 631502',
      color: '#e53935',
    },
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: 'Phone Numbers',
      content: '9498077767, 9445708467',
      color: '#1976d2',
    },
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: 'Email Address',
      content: 'devarajan@galaxyentpr.com',
      color: '#00acc1',
    },
    {
      icon: <AccessTime sx={{ fontSize: 40 }} />,
      title: 'Working Hours',
      content: 'Mon - Fri: 10:00 AM - 6:00 PM',
      color: '#ff9800',
    },
  ];

  return (
    <Box sx={{ pt: 10, pb: 8 }}>
      {/* Header Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)',
          color: 'white',
          py: 8,
          mb: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            opacity: 0.1,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Fade in timeout={1000}>
            <Box textAlign="center">
              <Business sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
              <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                Contact Us
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: '600px', mx: 'auto' }}>
                Get in touch with our team for all your automotive and industrial service needs.
                We're here to help you achieve excellence.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Contact Information */}
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {contactInfo.map((info, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Fade in timeout={1000 + index * 200}>
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      '& .contact-icon': {
                        transform: 'scale(1.1)',
                        color: info.color,
                      },
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      className="contact-icon"
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 2,
                        color: 'primary.main',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      {info.icon}
                    </Box>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ mb: 2, fontWeight: 600 }}
                    >
                      {info.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      sx={{ lineHeight: 1.6 }}
                    >
                      {info.content}
                    </Typography>
                  </CardContent>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Contact Details Card */}
        <Fade in timeout={1500}>
          <Paper
            elevation={3}
            sx={{
              p: 6,
              borderRadius: 4,
              background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
              border: '1px solid #e0e0e0',
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              sx={{ mb: 4, color: 'primary.main' }}
            >
              Get In Touch
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    <LocationOn sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Our Location
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    G1 Sastha Flats Ars Avenue<br />
                    Ashok Nagar Kanchipuram 631502
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    <Phone sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Call Us
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    9498077767<br />
                    9445708467
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    <Email sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Email Us
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    devarajan@galaxyentpr.com
                  </Typography>
                </Box>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ mb: 1, color: 'primary.main' }}>
                    <AccessTime sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Business Hours
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Monday - Friday<br />
                    10:00 AM - 6:00 PM
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default ContactPage;