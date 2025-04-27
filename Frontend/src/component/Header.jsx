import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ toggleSidebar }) {
    return (
        <AppBar position="fixed" sx={{ zIndex: 1201, background: 'white', color: 'black' }}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    edge="start"
                    onClick={toggleSidebar}
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap sx={{ fontWeight: 900 }}>
                    SAFETY ANALYTICS
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
