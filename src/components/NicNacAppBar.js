// src/components/NicNacAppBar.js
import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CustomButton from '../components/Button';
import { FaUserCircle } from 'react-icons/fa'; // Import profile icon
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchBar from './SearchBar';
import Divider from '@mui/material/Divider';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(['width', 'margin'], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(['width', 'margin'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
}));

const NicNacAppBar = ({ handleDrawerOpen, toggleTheme, currentTheme }) => {
    const [showLogin, setShowLogin] = React.useState(true); // State to toggle components

    const toggleComponent = () => {
        setShowLogin(!showLogin);
    };

    return (
        <AppBar position="fixed" elevation={0}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    edge="start"
                    sx={{
                    marginRight: 5,
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    NicNac
                </Typography>
                <div style={{ flexGrow: 1 }}></div>
                <SearchBar />
                <div style={{ flexGrow: 1 }}></div>
                <IconButton onClick={toggleTheme} color="inherit">
                    {currentTheme === 'dark' ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
                {showLogin ? (
                    <CustomButton text="Log In" onClick={toggleComponent} />
                ) : (
                    <IconButton onClick={toggleComponent}>
                        <FaUserCircle size="1.5em" />
                    </IconButton>
                )}
            </Toolbar>
            <Divider />
        </AppBar>
    );
};

// Defining prop types
NicNacAppBar.propTypes = {
    open: PropTypes.bool.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired,
    toggleTheme: PropTypes.func.isRequired, // Add prop validation for toggleTheme
  currentTheme: PropTypes.string.isRequired, // Add prop validation for currentTheme
  };

export default NicNacAppBar;
