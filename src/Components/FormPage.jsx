import React, { useState } from 'react';
import { Box, Typography, TextField, Button, FormControl, InputLabel, Select, MenuItem, Grid, Paper, IconButton } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const FormPage = () => {
  // State for form data
  const [formData, setFormData] = useState({
    challengeName: '',
    startDate: '',
    endDate: '',
    description: '',
    image: null,
    level: ''
  });

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle image change
  const handleImageChange = (event) => {
    setFormData({
      ...formData,
      image: event.target.files[0]
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log('Form Data:', formData);
  };

  return (
    <Box sx={{ padding: '20px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ marginBottom: '20px', textAlign: 'center' }}>
        Challenge Details
      </Typography>

      <Paper sx={{ padding: '20px', borderRadius: '8px', boxShadow: 3 }}>
        <Grid container spacing={2}>
          {/* Challenge Name */}
          <Grid item xs={12}>
            <TextField
              name="challengeName"
              label="Challenge Name"
              variant="outlined"
              fullWidth
              value={formData.challengeName}
              onChange={handleInputChange}
              sx={{ marginBottom: '20px' }}
            />
          </Grid>
          
          {/* Start Date */}
          <Grid item xs={12} md={6}>
            <TextField
              name="startDate"
              label="Start Date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.startDate}
              onChange={handleInputChange}
              sx={{ marginBottom: '20px' }}
            />
          </Grid>
          
          {/* End Date */}
          <Grid item xs={12} md={6}>
            <TextField
              name="endDate"
              label="End Date"
              type="date"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              value={formData.endDate}
              onChange={handleInputChange}
              sx={{ marginBottom: '20px' }}
            />
          </Grid>
          
          {/* Description */}
          <Grid item xs={12}>
            <TextField
              name="description"
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              value={formData.description}
              onChange={handleInputChange}
              sx={{ marginBottom: '20px' }}
            />
          </Grid>
          
          {/* Image Input */}
          <Grid item xs={12}>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="image-upload"
              type="file"
              onChange={handleImageChange}
            />
            <label htmlFor="image-upload">
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
              <Typography variant="body2" sx={{ marginLeft: '10px' }}>
                {formData.image ? formData.image.name : 'Upload Challenge Image'}
              </Typography>
            </label>
          </Grid>
          
          {/* Level Type */}
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="level-label">Level</InputLabel>
              <Select
                labelId="level-label"
                name="level"
                value={formData.level}
                onChange={handleInputChange}
                label="Level"
              >
                <MenuItem value="easy">Easy</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="hard">Hard</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          
          {/* Create Challenge Button */}
          <Grid item xs={12} display="flex" justifyContent="center">
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleSubmit}
              sx={{ width: '200px', height: '50px', borderRadius: '8px' }}
            >
              Create Challenge
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default FormPage;
