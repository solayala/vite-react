import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/context/AuthContext';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import './Header.scss';

const Header = ({ toggleSideMenu }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <AppBar 
      position="static" 
      color="default" 
      elevation={1}
      className="header"
    >
      <Toolbar className="header-toolbar">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleSideMenu}
          className="menu-button"
        >
          <MenuIcon />
        </IconButton>

        <Box className="spacer" />

        <Box className="user-section">
          {user ? (
            <>
              <Box className="user-info">
                <PersonIcon className="pet-icon" />
                <Typography variant="body1" className="username">
                  {user.username}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                color="primary"
                onClick={handleLogout}
                size="small"
                className="logout-button"
              >
                Logout
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate('/login')}
              className="login-button"
            >
              Login
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
