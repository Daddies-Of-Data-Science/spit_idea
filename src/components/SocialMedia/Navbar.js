// src/Navbar.js
import React from 'react';
import './App.css'
import { AppBar, Toolbar, Typography, InputBase, IconButton } from '@mui/material';
import { Search as SearchIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className=''>
    <AppBar  position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar className=' bg-gradient-to-r from-green-700 via-green-500 to-green-500'>
        {/* Logo */}
        <Typography  variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Media App
        </Typography>
        {/* Search Bar */}
        <div style={{ position: 'relative' }}>
          <IconButton sx={{ p: '10px' }} aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
          <InputBase className='rounded-lg bg-white px-2'
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search' }}
            sx={{ ml: 1, width: '200px' }}
          />
        </div>
        {/* User Profile Icon */}
        <IconButton color="inherit" aria-label="account">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default Navbar;
