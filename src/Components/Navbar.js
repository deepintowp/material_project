import React from 'react';

import { AppBar, Button, Toolbar, Typography, IconButton, Drawer } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = (anchor) => {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(!state);
  };
  return (
    <>
    <AppBar position="static"  color="primary">
       <Toolbar direction="row"   >
       <IconButton aria-label="menu" onClick={toggleDrawer(!state)} >
        <MenuIcon />
      </IconButton>
            <Typography  flexGrow="1" >
                Subho M
            </Typography>
            <Button  variant="text"   color="inherit" startIcon={<LoginIcon />}  >
                Login
            </Button>
            <Button variant="text"   color="inherit"  endIcon={<LogoutIcon />} >
                Logout
            </Button>
            
        </Toolbar>
    </AppBar>
    <Drawer
            
            open={state}
            onClose={toggleDrawer(!state)}
          >
           hello
          </Drawer>
    </>
  )
}

export default Navbar