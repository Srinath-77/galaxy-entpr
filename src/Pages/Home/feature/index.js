import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button, } from '@mui/material';
import { getSlidesData } from '../utils/constants';
import Grid from '@mui/material/Grid2';

// Importing necessary slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HomeComponent() {
  const slidesData = getSlidesData();
  console.log('slidesData', slidesData)
  // Slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through slides
    speed: 500, // Speed of slide transition
    slidesToShow: 1, // Number of slides visible at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Autoplay the carousel
    autoplaySpeed: 3000, // Speed of autoplay
    arrows: true, // Show next and previous arrows
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <Grid container spacing={4}>
      <Grid size={12}>
      <Slider {...settings}>
        {slidesData && slidesData.length > 0 && slidesData.map((slide, index) => (
            <div key={index}>
                <Box
                    sx={{
                        position: 'relative',
                        backgroundImage: `url(${slide.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        height: '90vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        filter: 'brightness(40%)',
                    }}
                >
                    <Typography variant="h4" 
                     sx={{ 
                        position: 'absolute', 
                        top: '50%', 
                        transform: 'translateY(-50%)',
                        fontWeight: 'bold', // Makes text bolder
                        color: 'white', // Ensures text stands out
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Adds text shadow for better readability
                      }}>
                        {slide.text}
                    </Typography>
                    {/* <Button 
                        variant="contained" 
                        sx={{ position: 'absolute', bottom: 30, left: '50%', transform: 'translateX(-50%)' }}
                    >
                        {slide.buttonText}
                    </Button> */}
                </Box>
            </div>
        ))}
      </Slider>
      </Grid>
    </Grid>
  );
}

export default HomeComponent;
