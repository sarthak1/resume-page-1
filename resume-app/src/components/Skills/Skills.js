import React from 'react';
import { Box, Typography, Divider, Grid, LinearProgress } from '@mui/material';
import { Code } from '@mui/icons-material';

const skills = [
  { name: 'Java', level: 90 },
  { name: 'Spring Boot', level: 85 },
  { name: 'Microservices', level: 85 },
  { name: 'REST API', level: 90 },
  { name: 'ReactJS', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'SQL', level: 85 },
  { name: 'Hibernate', level: 80 },
  { name: 'Kafka', level: 75 },
  { name: 'Docker', level: 70 },
  { name: 'Jenkins', level: 70 },
  { name: 'Git', level: 85 },
];

const Skills = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Code sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
          TECHNICAL SKILLS
        </Typography>
      </Box>
      
      <Grid container spacing={2} sx={{ ml: 2 }}>
        {skills.map((skill, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Box sx={{ mb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 'medium' }}>
                  {skill.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.level}%
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={skill.level} 
                sx={{ 
                  height: 8, 
                  borderRadius: 5,
                  '& .MuiLinearProgress-bar': {
                    backgroundColor: 'primary.main'
                  }
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      
      <Divider sx={{ my: 2 }} />
    </Box>
  );
};

export default Skills;
