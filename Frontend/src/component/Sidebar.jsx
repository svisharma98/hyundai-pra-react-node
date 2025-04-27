import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const drawerWidth = 240;

function Sidebar({ open }) {
    const location = useLocation(); // 👈 Get current route

    const isActive = (path) => location.pathname === path;


    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            sx={{

                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    background: '#258ae2',
                    color: 'white',
                    fontWeight: 900
                },
            }}
        >
            <Toolbar />

            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/"
                        sx={{
                            backgroundColor: isActive('/') ? '#2d73b0' : 'transparent',
                            '&:hover': { backgroundColor: '#2d73b0' },
                            color: 'white'
                        }}
                    >
                        <ListItemText primary="Dashboard" />
                    </ListItemButton>
                </ListItem>
            </List>

            <Accordion disableGutters
                elevation={0}
                square
                sx={{
                    backgroundColor: 'transparent',
                    '&:before': { display: 'none' }, // Remove top/bottom lines
                    margin: 0,
                }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ color: 'white' }}>
                    <Typography>Data Exploration</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/userfeed"
                                sx={{
                                    backgroundColor: isActive('/userfeed1') ? '#2d73b0' : 'transparent',
                                    '&:hover': { backgroundColor: '#2d73b0' },
                                    color: 'white'
                                }}
                            >
                                <ListItemText primary="Make Model Year" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/dealer"
                                sx={{
                                    backgroundColor: isActive('/dealer') ? '#2d73b0' : 'transparent',
                                    '&:hover': { backgroundColor: '#2d73b0' },
                                    color: 'white'
                                }}
                            >
                                <ListItemText primary="Dealer" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/claims"
                                sx={{
                                    backgroundColor: isActive('/claims') ? '#2d73b0' : 'transparent',
                                    '&:hover': { backgroundColor: '#2d73b0' },
                                    color: 'white'
                                }}
                            >
                                <ListItemText primary="Claims" />
                            </ListItemButton>
                        </ListItem>

                    </List>
                </AccordionDetails>
            </Accordion>

            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/userfeed"
                        sx={{
                            backgroundColor: isActive('/userfeed1') ? '#2d73b0' : 'transparent',
                            '&:hover': { backgroundColor: '#2d73b0' },
                            color: 'white'
                        }}
                    >
                        <ListItemText primary="Safety Analytics 360`" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/userfeed"
                        sx={{
                            backgroundColor: isActive('/userfeed1') ? '#2d73b0' : 'transparent',
                            '&:hover': { backgroundColor: '#2d73b0' },
                            color: 'white'
                        }}
                    >
                        <ListItemText primary="Competitive Analysis" />
                    </ListItemButton>
                </ListItem>
            </List>

            <Accordion disableGutters
                elevation={0}
                square
                sx={{
                    // color: 'white'
                    backgroundColor: 'transparent',
                    '&:before': { display: 'none' }, // Remove top/bottom lines
                    margin: 0,
                }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ color: 'white' }}  >
                    <Typography>Insights</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/userfeed"
                                sx={{
                                    backgroundColor: isActive('/userfeed1') ? '#2d73b0' : 'transparent',
                                    '&:hover': { backgroundColor: '#2d73b0' },
                                    color: 'white'
                                }}
                            >
                                <ListItemText primary="Safety Violation Predections" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/dealer"
                                sx={{
                                    backgroundColor: isActive('/dealer') ? '#2d73b0' : 'transparent',
                                    '&:hover': { backgroundColor: '#2d73b0' },
                                    color: 'white'
                                }}
                            >
                                <ListItemText primary="Recommendations" />
                            </ListItemButton>
                        </ListItem>

                    </List>
                </AccordionDetails>
            </Accordion>

            <Accordion disableGutters
                elevation={0}
                square
                sx={{
                    backgroundColor: 'transparent',
                    '&:before': { display: 'none' }, // Remove top/bottom lines
                    margin: 0,
                }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />} sx={{ color: 'white' }} >
                    <Typography>Configuration</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/userfeed"
                                sx={{
                                    backgroundColor: isActive('/userfeed1') ? '#2d73b0' : 'transparent',
                                    '&:hover': { backgroundColor: '#2d73b0' },
                                    color: 'white'
                                }}
                            >
                                <ListItemText primary="Data Source" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/dealer"
                                sx={{
                                    backgroundColor: isActive('/dealer') ? '#2d73b0' : 'transparent',
                                    '&:hover': { backgroundColor: '#2d73b0' },
                                    color: 'white'
                                }}
                            >
                                <ListItemText primary="Connections" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/claims"
                                sx={{
                                    backgroundColor: isActive('/claims') ? '#2d73b0' : 'transparent',
                                    '&:hover': { backgroundColor: '#2d73b0' },
                                    color: 'white'
                                }}
                            >
                                <ListItemText primary="User management" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton
                                component={Link}
                                to="/claims"
                                sx={{
                                    backgroundColor: isActive('/claims') ? '#2d73b0' : 'transparent',
                                    '&:hover': { backgroundColor: '#2d73b0' },
                                    color: 'white'
                                }}
                            >
                                <ListItemText primary="Make" />
                            </ListItemButton>
                        </ListItem>

                    </List>
                </AccordionDetails>
            </Accordion>

            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/userfeed"
                        sx={{
                            backgroundColor: isActive('/userfeed1') ? '#2d73b0' : 'transparent',
                            '&:hover': { backgroundColor: '#2d73b0' },
                            color: 'white'
                        }}
                    >
                        <ListItemText primary="Manul Data Upload" />
                    </ListItemButton>
                </ListItem>
            </List>

            <List>
                <ListItem disablePadding>
                    <ListItemButton
                        component={Link}
                        to="/userfeed"
                        sx={{
                            backgroundColor: isActive('/userfeed1') ? '#2d73b0' : 'transparent',
                            '&:hover': { backgroundColor: '#2d73b0' },
                            color: 'white'
                        }}
                    >
                        <ListItemText primary="Custom fields" />
                    </ListItemButton>
                </ListItem>
            </List>

        </Drawer>
    );
}

export default Sidebar;
