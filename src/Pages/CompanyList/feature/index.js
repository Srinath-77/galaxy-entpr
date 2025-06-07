import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid2';
import { Box, Typography, Button, Avatar  } from '@mui/material';
import { getCompanyList } from '../utils/constants';
import { Business } from '@mui/icons-material';
import WorkIcon from '@mui/icons-material/Work';

function CompanyListComponent() { 
    const list = getCompanyList();
    return(
        <Grid container spacing={2}>
            <Grid size={12} alignContent={'center'}>
                <Typography gutterBottom variant="h3" component="div" align='center'>
                    {'Our Trusted Partners and Clients'}
                </Typography>
            </Grid>
            <Grid size={12}>
                <Grid container spacing={4}>
                    {list && list.length > 0 && list.map((item, i)=> {
                        return(
                            <Grid size={{ xs: 12, md: 4, sm: 4 }} key={item.id}>
                                <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
                                    <CardContent
                                        sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center', // Centers content horizontally
                                        textAlign: 'center',  // Ensures text is centered
                                        }}
                                    >
                                        {/* Avatar at the center of the card */}
                                        

                                            {item.icon ? (
                                                <img src={item.icon} style={{ width: 200, height: 100, }} />
                                            ) : (
                                                <Avatar
                                                sx={{bgcolor: 'primary.main', width: 80, height: 80, }}
                                                //variant="square"
                                                >
                                                <WorkIcon sx={{ fontSize: 40, color: 'white' }} />
                                                </Avatar>
                                            )}

                                        {/* Card Content below Avatar */}
                                        <Typography variant="h6">{item.title}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Grid>
            
        </Grid>
    );
}

export default CompanyListComponent;