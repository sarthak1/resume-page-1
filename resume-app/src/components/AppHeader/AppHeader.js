import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@mui/material';
import { Brightness4, Brightness7, Download } from '@mui/icons-material';
import { useTheme } from '../../context/ThemeContext';
import { generatePDF } from '../../utils/pdfGenerator';

const AppHeader = () => {
  const { toggleColorMode } = useTheme();
  
  const handleDownloadPDF = () => {
    generatePDF('resume-content', 'Sarthak_Kanungo_Resume.pdf');
  };

  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
          Sarthak Kanungo
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<Download />}
            onClick={handleDownloadPDF}
            id="download-pdf-button"
          >
            Download PDF
          </Button>
          <IconButton 
            onClick={toggleColorMode} 
            color="inherit"
            aria-label="toggle theme"
            sx={{ 
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              p: 1
            }}
          >
            <Brightness4 sx={{ display: 'light' }} />
            <Brightness7 sx={{ display: 'none' }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
