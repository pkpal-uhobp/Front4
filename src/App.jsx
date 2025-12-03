import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import './App.css';

// Components
import Navigation from './components/Navigation';

// Pages
import Home from './pages/Home';
import TechnologyList from './pages/TechnologyList';
import TechnologyDetail from './pages/TechnologyDetail';
import AddTechnology from './pages/AddTechnology';
import Dashboard from './pages/Dashboard';

// Create MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

/**
 * Main application component
 * Sets up routing, manages authentication, provides general context for child components
 * Contains main interface structure: navigation, content area and footer
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navigation />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/technologies" element={<TechnologyList />} />
              <Route path="/technology/:id" element={<TechnologyDetail />} />
              <Route path="/add" element={<AddTechnology />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Box>
          <Box
            component="footer"
            sx={{
              py: 2,
              px: 2,
              mt: 'auto',
              backgroundColor: 'grey.100',
              textAlign: 'center',
              color: 'text.secondary',
              fontSize: '0.875rem'
            }}
          >
            Tech Tracker © {new Date().getFullYear()} - Персональный трекер освоения технологий
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
