import { Box, Typography, Grid, Card, CardContent } from '@mui/material';
import React from 'react';

// Sample image logos for each card
const logos = [
  '/path/to/logo1.png', // Replace with actual paths to your logo images
  '/path/to/logo2.png',
  '/path/to/logo3.png',
  '/path/to/logo4.png',
];

// Random Logo component
const Logo = ({ logo }) => (
  <Box
    sx={{
      width: '60px',
      height: '60px',
      backgroundImage: `url(${logo})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      margin: '0 auto 20px auto',
    }}
  />
);

const Chalanges = () => {
  // Function to get a random logo
  const getRandomLogo = () => logos[Math.floor(Math.random() * logos.length)];

  return (
    <Box sx={{ backgroundColor: 'white', minHeight: '100vh', padding: '50px' }}>
      <Typography
        variant="h3"
        sx={{ color: '#002A3B', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}
      >
        Why Participate in AI Challenges
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        {/* Card: Prove Your Skills */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ backgroundColor: '#F8F9FD', color: '#002A3B', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Logo logo={getRandomLogo()} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                Prove Your Skills
              </Typography>
              <Typography variant="body1">
                Showcase your abilities and tackle real-world problems with your AI skills.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card: Learn from Community */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ backgroundColor: '#F8F9FD', color: '#002A3B', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Logo logo={getRandomLogo()} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                Learn from Community
              </Typography>
              <Typography variant="body1">
                Connect with other data scientists and AI practitioners to exchange knowledge.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card: Challenge Yourself */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ backgroundColor: '#F8F9FD', color: '#002A3B', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Logo logo={getRandomLogo()} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                Challenge Yourself
              </Typography>
              <Typography variant="body1">
                Push your boundaries and tackle diverse and challenging problems.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Card: Earn Recognition */}
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Card sx={{ backgroundColor: '#F8F9FD', color: '#002A3B', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px' }}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Logo logo={getRandomLogo()} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
                Earn Recognition
              </Typography>
              <Typography variant="body1">
                Gain recognition for your achievements and contribute to your professional growth.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chalanges;
