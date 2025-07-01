import React from 'react';
import { Box, Typography, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Folder } from '@mui/icons-material';
import { FiberManualRecord } from '@mui/icons-material';

const projects = [
  {
    name: "E-commerce Platform",
    description: "A full-stack e-commerce platform with microservices architecture",
    technologies: ["Spring Boot", "React", "MongoDB", "Docker"],
    highlights: [
      "Implemented product catalog and shopping cart functionality",
      "Integrated payment gateway and order processing",
      "Deployed using Docker and Kubernetes"
    ]
  },
  {
    name: "Task Management System",
    description: "A collaborative task management application",
    technologies: ["Node.js", "Express", "React", "PostgreSQL"],
    highlights: [
      "Real-time updates using WebSockets",
      "Role-based access control",
      "File attachments and comments"
    ]
  },
  {
    name: "Customer Support Portal",
    description: "A ticketing system for customer support",
    technologies: ["Java", "Spring Boot", "Angular", "MySQL"],
    highlights: [
      "Automated ticket assignment and escalation",
      "Knowledge base integration",
      "Analytics dashboard"
    ]
  }
];

const Projects = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Folder sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
          PROJECTS
        </Typography>
      </Box>
      
      {projects.map((project, index) => (
        <Box key={index} sx={{ mb: 3, ml: 3 }}>
          <Box sx={{ mb: 1 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              {project.description}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1 }}>
              {project.technologies.map((tech, i) => (
                <Box 
                  key={i}
                  sx={{
                    bgcolor: 'primary.light',
                    color: 'primary.contrastText',
                    px: 1,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: '0.75rem',
                    fontWeight: 'medium'
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Box>
          </Box>
          <List dense disablePadding>
            {project.highlights.map((highlight, i) => (
              <ListItem key={i} disableGutters disablePadding sx={{ py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <FiberManualRecord sx={{ fontSize: '0.5rem' }} />
                </ListItemIcon>
                <ListItemText primary={highlight} primaryTypographyProps={{ variant: 'body2' }} />
              </ListItem>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};

export default Projects;
