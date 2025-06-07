import React from 'react';
import { Container, Box, Typography, Paper, List, ListItem, ListItemText, Link } from '@mui/material';
import { Phone, Email, LocationOn, AccessTime } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';

const ContactDetailsPage = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ padding: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Contact Us
        </Typography>
        
        {/* Contact Information */}
        <Paper sx={{ padding: 4, marginBottom: 4 }}>
          <Typography variant="h6" gutterBottom>
            Our Contact Information
          </Typography>
          <Grid container spacing={2}>
            {/* Address */}
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem>
                  <LocationOn sx={{ marginRight: 2 }} />
                  <ListItemText
                    primary="Our Address"
                    secondary="G1 Sastha Flats Ars Avenue Ashok Nagar Kanchipuram 631502 "
                  />
                </ListItem>
              </List>
            </Grid>
            
            {/* Phone Number */}
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem>
                  <Phone sx={{ marginRight: 2 }} />
                  <ListItemText
                    primary="Phone Number"
                    secondary={<Typography variant="subtitle1">{`9498077767, 9445708467`}</Typography>}
                  />
                </ListItem>
              </List>
            </Grid>
            
            {/* Email */}
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem>
                  <Email sx={{ marginRight: 2 }} />
                  <ListItemText
                    primary="Email Address"
                    secondary={<Link href="devarajan@galaxyentpr.com">devarajan@galaxyentpr.com</Link>}
                  />
                </ListItem>
              </List>
            </Grid>
            
            {/* Working Hours */}
            <Grid item xs={12} sm={6}>
              <List>
                <ListItem>
                  <AccessTime sx={{ marginRight: 2 }} />
                  <ListItemText
                    primary="Working Hours"
                    secondary="Mon - Fri: 10:00 AM - 6:00 PM"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Paper>
        
        {/* Google Map */}
        {/* <Paper sx={{ padding: 4 }}>
          <Typography variant="h6" gutterBottom>
            Find Us on Google Maps
          </Typography>
            <iframe
            title="Google Map Location"
            width="100%"
            height="400"
            src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJOwg_06VPwokRYv5FgP1Gfb0"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            ></iframe>
        </Paper> */}
      </Box>
    </Container>
  );
};

export default ContactDetailsPage;
