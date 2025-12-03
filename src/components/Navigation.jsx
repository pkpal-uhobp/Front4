import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';

const navItems = [
  { path: '/', label: 'Главная', icon: <HomeIcon /> },
  { path: '/technologies', label: 'Технологии', icon: <ListIcon /> },
  { path: '/dashboard', label: 'Статистика', icon: <DashboardIcon /> },
  { path: '/add', label: 'Добавить', icon: <AddIcon /> }
];

/**
 * Navigation component
 * Displays navigation menu with links to all main sections
 * Uses React Router for navigation without page reload
 * Adaptive version for mobile devices
 */
const Navigation = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawer = (
    <Box onClick={toggleDrawer(false)} sx={{ width: 250 }}>
      <Typography
        variant="h6"
        sx={{ p: 2, borderBottom: 1, borderColor: 'divider' }}
      >
        Tech Tracker
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                '&.active': {
                  backgroundColor: 'primary.light',
                  color: 'primary.contrastText',
                  '& .MuiListItemIcon-root': {
                    color: 'primary.contrastText'
                  }
                }
              }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" elevation={1}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {isMobile ? (
              <>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={toggleDrawer(true)}
                >
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1, ml: 1 }}
                >
                  Tech Tracker
                </Typography>
              </>
            ) : (
              <>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 0, mr: 4 }}
                >
                  🎯 Tech Tracker
                </Typography>
                <Box sx={{ flexGrow: 1, display: 'flex', gap: 1 }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.path}
                      component={NavLink}
                      to={item.path}
                      color="inherit"
                      startIcon={item.icon}
                      sx={{
                        '&.active': {
                          backgroundColor: 'rgba(255,255,255,0.15)'
                        }
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawer}
      </Drawer>
    </>
  );
};

export default Navigation;
