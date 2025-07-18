import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useTheme,
  useMediaQuery,
  Avatar
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import myImage from '../Assets/logo.png';

const Navigation = ({ currentPage, onPageChange }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const menuItems = [
    { label: 'Home', value: 'home' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2 }}>
        <Typography variant="h6" color="primary" fontWeight="bold">
            <Avatar 
            alt="Remy Sharp" 
            src={myImage} 
            sx={{ width: 50, height: 50 }}/> 
        </Typography>
        
        <IconButton>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.value} disablePadding>
            <ListItemButton
              onClick={() => onPageChange(item.value)}
              sx={{
                backgroundColor: currentPage === item.value ? 'primary.light' : 'transparent',
                color: currentPage === item.value ? 'white' : 'text.primary',
                '&:hover': {
                  backgroundColor: 'primary.light',
                  color: 'white',
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="inherit" elevation={0}>
        <Toolbar sx={{ maxWidth: '1200px', width: '100%', mx: 'auto' }}>
          {/* <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              color: 'primary.main',
              fontWeight: 'bold',
              fontSize: '1.5rem',
            }}
          >
            Galaxy Enterprises
          </Typography> */}
            <Box 
                sx={{
                flexGrow: 1,
                color: 'primary.main',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                }}>
                    <Avatar 
                    alt="Remy Sharp" 
                    src={myImage} 
                    sx={{ width: 50, height: 50 }}/>         
            </Box>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.value}
                  onClick={() => onPageChange(item.value)}
                  variant={currentPage === item.value ? 'contained' : 'text'}
                  sx={{
                    color: currentPage === item.value ? 'white' : 'text.primary',
                    '&:hover': {
                      backgroundColor: currentPage === item.value ? 'primary.dark' : 'primary.light',
                      color: 'white',
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;