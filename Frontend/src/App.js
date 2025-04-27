import './App.css';
import 'ag-grid-community/styles/ag-grid.css'; // core styles
import 'ag-grid-community/styles/ag-theme-alpine.css'; // theme styles

import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import Sidebar from './component/Sidebar';
import Header from './component/Header';
import { Box, Toolbar } from '@mui/material';

import Settings from './pages/Settings';
import Dashboard from './pages/Dashboard1';
import Users from './pages/Users';
import Login from './pages/Login';


const AppLayout = () => {
  const [open, setOpen] = useState(true);
  const toggleSidebar = () => setOpen(!open);
  const drawerWidth = -220;

  const location = useLocation();
  const isLoginPage = location.pathname === '/login';


  return (
    <>
      {!isLoginPage ? (
        <Box sx={{ display: 'flex' }}>
          <Header toggleSidebar={toggleSidebar} />
          <Sidebar open={open} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              marginLeft: !open ? `${drawerWidth}px` : 0,
              transition: 'margin 0.3s',
            }}
          >
            <Toolbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Box>
        </Box>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </>
  );
}

// export default App;


export default function App({ toggleSidebar, open }) {
  return (
    <BrowserRouter>
      <AppLayout toggleSidebar={toggleSidebar} open={open} />
    </BrowserRouter>
  );
}