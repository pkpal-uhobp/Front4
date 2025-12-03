import { useState } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';
import './App.css';

import Navigation from './components/Navigation';
import Modal from './components/Modal';

import Home from './pages/Home';
import TechnologyList from './pages/TechnologyList';
import TechnologyDetail from './pages/TechnologyDetail';
import AddTechnology from './pages/AddTechnology';
import Dashboard from './pages/Dashboard';

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

function App() {
    const [activeTab, setActiveTab] = useState(0);
    const [selectedTechnologyId, setSelectedTechnologyId] = useState(null);
    const [detailModalOpen, setDetailModalOpen] = useState(false);

    const handleTabChange = (newValue) => {
        setActiveTab(newValue);
    };

    const handleTechnologyClick = (id) => {
        setSelectedTechnologyId(id);
        setDetailModalOpen(true);
    };

    const handleCloseDetailModal = () => {
        setDetailModalOpen(false);
        setSelectedTechnologyId(null);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 0:
                return <Home onNavigate={handleTabChange} />;
            case 1:
                return (
                    <TechnologyList onTechnologyClick={handleTechnologyClick} />
                );
            case 2:
                return <Dashboard onTechnologyClick={handleTechnologyClick} />;
            case 3:
                return <AddTechnology onSuccess={() => handleTabChange(1)} />;
            default:
                return <Home onNavigate={handleTabChange} />;
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
                }}
            >
                <Navigation
                    activeTab={activeTab}
                    onTabChange={handleTabChange}
                />
                <Box component="main" sx={{ flexGrow: 1 }}>
                    {renderContent()}
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
                        fontSize: '0.875rem',
                    }}
                >
                    Tech Tracker © {new Date().getFullYear()} - Персональный
                    трекер освоения технологий
                </Box>
                <Modal
                    open={detailModalOpen}
                    onClose={handleCloseDetailModal}
                    maxWidth="md"
                >
                    {selectedTechnologyId && (
                        <TechnologyDetail
                            id={selectedTechnologyId}
                            onClose={handleCloseDetailModal}
                        />
                    )}
                </Modal>
            </Box>
        </ThemeProvider>
    );
}

export default App;
