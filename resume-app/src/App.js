import { CssBaseline } from '@mui/material';
import { Container, Box } from '@mui/material';
import { ThemeProvider } from './context/ThemeContext';
import AppHeader from './components/AppHeader/AppHeader';
import Header from './components/Header/Header';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <ThemeProvider>
      <CssBaseline />
      <AppHeader />
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Box 
          id="resume-content"
          sx={{ 
            bgcolor: 'background.paper',
            boxShadow: 3,
            borderRadius: 2,
            p: { xs: 2, sm: 3, md: 4 },
            mb: 4,
            transition: 'background-color 0.3s ease, color 0.3s ease',
          }}
        >
          <Header />
          <Education />
          <Experience />
          <Skills />
          <Projects />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
