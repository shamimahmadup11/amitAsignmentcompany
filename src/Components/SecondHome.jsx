import { Box, Typography, Grid } from '@mui/material';

const SecondHome = () => {
  return (
    <Box sx={{ backgroundColor: '#002A3B', minHeight: '40vh', padding: '50px' }}>
      <Grid container spacing={4} justifyContent="center">
        {/* Statistic Cards */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: 'white',
              color: '#002A3B',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              100k+
            </Typography>
            <Typography variant="body1">
              AI Model Submissions
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: 'white',
              color: '#002A3B',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              50k+
            </Typography>
            <Typography variant="body1">
              Data Scientists
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              backgroundColor: 'white',
              color: '#002A3B',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
              boxShadow: 3,
            }}
          >
            <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              100+
            </Typography>
            <Typography variant="body1">
              AI Challenges Hosted
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SecondHome;
