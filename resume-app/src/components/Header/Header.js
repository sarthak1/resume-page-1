import React from 'react';
import { Box, Typography, Divider, Link } from '@mui/material';
import { Email, Phone, LinkedIn, GitHub, LocationOn } from '@mui/icons-material';

const Header = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 1 }}>
        Sarthak Kanungo
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        Bengaluru, India
      </Typography>
      
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Phone fontSize="small" sx={{ mr: 0.5 }} />
          <Link href="tel:+919731273286" color="inherit" underline="hover">
            +91-9731273286
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Email fontSize="small" sx={{ mr: 0.5 }} />
          <Link href="mailto:skanungodgacm@gmail.com" color="inherit" underline="hover">
            skanungodgacm@gmail.com
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <LinkedIn fontSize="small" sx={{ mr: 0.5 }} />
          <Link href="https://linkedin.com/in/sarthak3" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
            linkedin.com/in/sarthak3
          </Link>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <GitHub fontSize="small" sx={{ mr: 0.5 }} />
          <Link href="https://github.com/sarthak1" target="_blank" rel="noopener noreferrer" color="inherit" underline="hover">
            github.com/sarthak1
          </Link>
        </Box>
      </Box>
      
      <Divider sx={{ my: 2 }} />
      
      <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', mt: 3, mb: 2 }}>
        PROFILE SUMMARY
      </Typography>
      <Typography variant="body1" paragraph>
        12+ Years of hands-on work experience following SDLC and Agile, Scrum methodology in Java, Spring Cloud, Spring Boot, Microservices, Rest API, Kafka, SQL, Hibernate, jQuery, ReactJS, Node JS, Angular, Bootstrap, Maven, MySQL, Jenkins, and web technologies.
      </Typography>
    </Box>
  );
};

export default Header;
