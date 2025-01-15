import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

const pages = [
  { title: 'All Medias', link: '/media' },
];

export default function NeuronsAppBar() {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const isMobile = useMediaQuery('(max-width:987px)');

  // Menu handlers
  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'background.nav',
          boxShadow: 'none',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 16px',
          }}
        >
          {/* Logo Section */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
              }}
            >
              <img
                src="/neurons.me.png"
                alt="neurons.me"
                style={{ width: 34, height: 34, marginRight: 8 }}
              />
            </Link>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: 'Roboto, sans-serif',
                fontWeight: 700,
                color: 'white', // Ensure text is white
                textDecoration: 'none',
              }}
            >
              media.neurons.me
            </Typography>
          </Box>

          {/* Desktop Links */}
          {!isMobile && (
            <Box
              sx={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.title}
                  component={Link}
                  to={page.link}
                  sx={{
                    my: 2,
                    color: 'white', // Ensure text is white
                    display: 'block',
                  }}
                >
                  {page.title}
                </Button>
              ))}
              {/* Home Icon */}
              <IconButton
                component={Link}
                to="https://neurons.me"
                sx={{
                  color: 'white',
                  marginLeft: 2,
                }}
              >
                <HomeIcon />
              </IconButton>
            </Box>
          )}

          {/* Mobile Menu Icon (Right-Aligned) */}
          {isMobile && (
            <IconButton
              edge="end" // Aligns to the right
              aria-label="menu"
              onClick={handleOpenNavMenu}
              sx={{ color: 'white' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Adjust Main Content */}
      <Box sx={{ mt: 8 }}> {/* This pushes the content below the AppBar */}
        {/* Your main content goes here */}
      </Box>

      {/* Mobile Menu */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right', // Anchor opens from the right
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right', // Transform opens from the right
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {pages.map((page) => (
          <MenuItem key={page.title} onClick={handleCloseNavMenu}>
            <Typography
              textAlign="center"
              component={Link}
              to={page.link}
              sx={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              {page.title}
            </Typography>
          </MenuItem>
        ))}
        <MenuItem onClick={handleCloseNavMenu}>
          <Typography
            textAlign="center"
            component={Link}
            to="/"
            sx={{
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <HomeIcon sx={{ marginRight: 1 }} /> Home
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}