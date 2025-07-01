import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Work } from '@mui/icons-material';
import { FiberManualRecord } from '@mui/icons-material';

const experiences = [
  {
    company: "Mphasis Pvt. Ltd.",
    position: "Delivery Module Lead",
    duration: "30 August 2021 - 11 December 2023",
    location: "Bengaluru, India",
    responsibilities: [
      "Led a team of 5 developers in designing and implementing microservices architecture",
      "Improved system performance by 40% through code optimization and database tuning",
      "Implemented CI/CD pipelines using Jenkins and Docker for automated deployments",
      "Mentored junior developers and conducted code reviews to ensure code quality"
    ]
  },
  {
    company: "Infosys Ltd.",
    position: "Senior Systems Engineer",
    duration: "January 2018 - July 2021",
    location: "Pune, India",
    responsibilities: [
      "Developed and maintained enterprise applications using Java and Spring Boot",
      "Designed and implemented RESTful APIs for client applications",
      "Collaborated with cross-functional teams to define, design, and ship new features",
      "Reduced application response time by 30% through performance optimization"
    ]
  }
];

const Experience = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Work sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
          PROFESSIONAL EXPERIENCE
        </Typography>
      </Box>
      
      {experiences.map((exp, index) => (
        <Box key={index} sx={{ mb: 3, ml: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {exp.company}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {exp.duration}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
            <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
              {exp.position}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {exp.location}
            </Typography>
          </Box>
          <List dense disablePadding>
            {exp.responsibilities.map((item, i) => (
              <ListItem key={i} disableGutters disablePadding sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <FiberManualRecord sx={{ fontSize: '0.5rem' }} />
                </ListItemIcon>
                <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
      
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};

export default Experience;
