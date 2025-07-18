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
  Avatar,
  LinearProgress,
} from '@mui/material';
import {
  Engineering,
  PrecisionManufacturing,
  Build,
  Star,
  Group,
  Timeline,
} from '@mui/icons-material';

const AboutPage = () => {
  const features = [
    {
      icon: <Engineering sx={{ fontSize: 40 }} />,
      title: 'Expert Engineering',
      description: 'Our team of skilled engineers brings decades of experience in automotive and industrial solutions.',
    },
    {
      icon: <PrecisionManufacturing sx={{ fontSize: 40 }} />,
      title: 'Precision Quality',
      description: 'We maintain the highest standards of precision and quality in all our services and deliverables.',
    },
    {
      icon: <Build sx={{ fontSize: 40 }} />,
      title: 'Advanced Tools',
      description: 'State-of-the-art equipment and modern technology ensure efficient and reliable results.',
    },
  ];

  const stats = [
    { label: 'Years of Experience', value: 15, icon: <Timeline /> },
    { label: 'Satisfied Clients', value: 200, icon: <Group /> },
    { label: 'Projects Completed', value: 500, icon: <Star /> },
    { label: 'Industry Awards', value: 8, icon: <Star /> },
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Fade in timeout={1000}>
            <Box textAlign="center">
              <Typography variant="h1" component="h1" sx={{ mb: 2 }}>
                About Galaxy Enterprises
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9, maxWidth: '800px', mx: 'auto' }}>
                Leading the automotive and industrial services sector with innovation, 
                expertise, and an unwavering commitment to excellence since our founding.
              </Typography>
            </Box>
          </Fade>
        </Container>
      </Box>

      {/* Mission & Vision */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Fade in timeout={1000}>
              <Card sx={{ height: '100%', p: 4 }}>
                <CardContent>
                  <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                    Our Mission
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                    To deliver exceptional automotive and industrial services through our highly skilled 
                    and industry-trained workforce, utilizing cutting-edge technology and maintaining 
                    the highest standards of quality and customer satisfaction.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Fade in timeout={1200}>
              <Card sx={{ height: '100%', p: 4 }}>
                <CardContent>
                  <Typography variant="h3" component="h2" sx={{ mb: 3, color: 'primary.main' }}>
                    Our Vision
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.8, color: 'text.secondary' }}>
                    To be the leading provider of automotive and industrial services, recognized for 
                    our innovation, reliability, and commitment to excellence, while fostering 
                    long-term partnerships with our valued clients.
                  </Typography>
                </CardContent>
              </Card>
            </Fade>
          </Grid>
        </Grid>
      </Container>

      {/* Features Section */}
      <Box sx={{ backgroundColor: 'background.paper', py: 8, mb: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            component="h2"
            textAlign="center"
            sx={{ mb: 2, color: 'primary.main' }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            sx={{ mb: 6, color: 'text.secondary', maxWidth: '600px', mx: 'auto' }}
          >
            Our commitment to excellence and customer satisfaction sets us apart in the industry.
          </Typography>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Fade in timeout={1000 + index * 200}>
                  <Card
                    sx={{
                      height: '100%',
                      textAlign: 'center',
                      p: 4,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        '& .feature-icon': {
                          transform: 'scale(1.1)',
                          color: 'primary.main',
                        },
                      },
                    }}
                  >
                    <CardContent>
                      <Box
                        className="feature-icon"
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          mb: 2,
                          color: 'secondary.main',
                          transition: 'all 0.3s ease',
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container maxWidth="lg">
        <Fade in timeout={1500}>
          <Paper
            elevation={3}
            sx={{
              p: 6,
              borderRadius: 4,
              background: 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              textAlign="center"
              sx={{ mb: 6, color: 'primary.main' }}
            >
              Our Achievements
            </Typography>
            
            <Grid container spacing={4}>
              {stats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Box textAlign="center">
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        mx: 'auto',
                        mb: 2,
                        backgroundColor: 'primary.main',
                        fontSize: 40,
                      }}
                    >
                      {stat.icon}
                    </Avatar>
                    <Typography variant="h3" component="div" sx={{ mb: 1, color: 'primary.main' }}>
                      {stat.value}+
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
};

export default AboutPage;