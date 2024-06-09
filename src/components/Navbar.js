import React, { useState, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import InputBase from '@mui/material/InputBase';
import { alpha, styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popper from '@mui/material/Popper';
import Paper from '@mui/material/Paper';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import MenuList from '@mui/material/MenuList'; // Import MenuList

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [storyAnchorEl, setStoryAnchorEl] = useState(null);
  const storyButtonRef = useRef(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleStoryMenuOpen = (event) => {
    setStoryAnchorEl(event.currentTarget);
  };

  const handleStoryMenuClose = () => {
    setStoryAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black' }}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2, display: { sm: 'none' } }}
          onClick={handleMenuOpen}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          Kid's Story
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
          <Button color="inherit">Home</Button>
          <Button
            color="inherit"
            ref={storyButtonRef}
            onMouseEnter={handleStoryMenuOpen}
            aria-controls={storyAnchorEl ? 'story-menu' : undefined}
            aria-haspopup="true"
          >
            Story
          </Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <IconButton color="inherit">
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Home</MenuItem>
        <MenuItem onClick={handleMenuClose}>Shop</MenuItem>
        <MenuItem onClick={handleMenuClose}>About</MenuItem>
        <MenuItem onClick={handleMenuClose}>Contact</MenuItem>
      </Menu>
      <Popper
        id="story-menu"
        open={Boolean(storyAnchorEl)}
        anchorEl={storyButtonRef.current}
        placement="bottom-start"
        disablePortal
        style={{ marginTop: '8px', zIndex: 1300 }} // Added zIndex
        onMouseEnter={handleStoryMenuOpen}
        onMouseLeave={handleStoryMenuClose}
      >
        <ClickAwayListener onClickAway={handleStoryMenuClose}>
          <Paper>
            <MenuList>
              <MenuItem onClick={handleStoryMenuClose}>Fairytell Story</MenuItem>
              <MenuItem onClick={handleStoryMenuClose}>Moral Story</MenuItem>
              <MenuItem onClick={handleStoryMenuClose}>Fun story</MenuItem>
            </MenuList>
          </Paper>
        </ClickAwayListener>
      </Popper>
    </AppBar>
  );
};

export default Navbar;
