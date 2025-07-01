import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
import { School } from '@mui/icons-material';

const Education = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <School sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
          EDUCATION
        </Typography>
      </Box>
      
      <Box sx={{ ml: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Biju Patnaik University of Technology
          </Typography>
          <Typography variant="body2" color="text.secondary">
            July 2000 - July 2004
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">
            Bachelor of Engineering in Information Technology
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rourkela, Odisha
          </Typography>
        </Box>
      </Box>
      
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};

export default Education;
