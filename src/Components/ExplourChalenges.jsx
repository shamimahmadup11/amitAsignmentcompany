import { Box, Typography, Button, TextField, Menu, MenuItem, Grid, Paper } from '@mui/material';
import React, { useState } from 'react';

const ExplourChalenges = () => {
  // State for the selected difficulty level
  const [difficulty, setDifficulty] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleDifficultyChange = (value) => {
    setDifficulty(value);
    setAnchorEl(null); // Close the menu after selecting
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const handleMenuClose = () => {
    setAnchorEl(null);
  };


  return (
    <Box sx={{ padding: '50px', backgroundColor: '#002A3B', minHeight: '40vh' }}>
      <Typography variant="h4" sx={{ color: 'white', marginBottom: '20px', textAlign: 'center' }}>
        Explore Challenges
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ borderRadius: '8px', overflow: 'hidden' }}>
            <TextField
              label="Search"
              variant="outlined"
              fullWidth
              sx={{ backgroundColor: 'white' ,  '& .MuiOutlinedInput-root': { borderRadius: '8px' } }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Paper>
        </Grid>
        
        {/* Filter Button */}
        <Grid item xs={12} md={4} display="flex" alignItems="center" justifyContent="flex-end">
          <Box sx={{ position: 'relative' }}>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleFilterClick}
              sx={{ width: '120px', height: '60px', borderRadius: '8px' }}
            >
              Filter
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  borderRadius: '8px',
                  marginTop: '10px',
                },
              }}
            >
              <MenuItem onClick={() => handleDifficultyChange('')}>None</MenuItem>
              <MenuItem onClick={() => handleDifficultyChange('easy')}>Easy</MenuItem>
              <MenuItem onClick={() => handleDifficultyChange('medium')}>Medium</MenuItem>
              <MenuItem onClick={() => handleDifficultyChange('hard')}>Hard</MenuItem>
            </Menu>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ExplourChalenges;
