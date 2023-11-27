'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import PersonIcon from '@mui/icons-material/Person';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useContext } from 'react';
import { AuthContext } from '@/context/authcontext';

import styles from './navbar.module.css'
import { Menu, MenuItem } from '@mui/material';
import Link from 'next/link';
import { deleteCookies } from '@/service/cookies';
import { redirect } from 'next/navigation';

const drawerWidth = 240;

function NavBar(props) {
  const {token,role, setToken, setRole} =useContext(AuthContext)
  const navItems = !token ? ['Inicio', '¿Dónde estamos?', 'Horarios', 'Contáctanos'] : (role === "customer" ? ['¿Dónde estamos?', 'Mis reservas', 'Pedir cita'] : ['Clientes', 'Materiales', 'Proveedores', 'Reservas']);
  const navItemRoutes = role === "customer" ? ['location', 'appointments', 'newappointment'] : ['customers', 'inventory', 'suppliers', 'appointments']

  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  
  const handleClick = (event) => {
    setMenuOpen(event.currentTarget);
  };
  const handleClose = () => {
    setMenuOpen(null);
  };

  const handleLogOut = () => {
    deleteCookies()
    setToken(null);
    setRole(null);
    redirect('/');
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#210130', color: 'white', gap: '10px' }}>
      <List sx={{ display: 'flex', flexDirection: 'column',gap: '10px', backgroundColor: '#4A0266', alignItems: 'center'}}>
        {navItems.map((item,i) => (
          <ListItem key={item} disablePadding sx={{ borderRadius: '10px', backgroundColor: '#210130', width: '90%', display: 'flex', justifyContent: 'center'}} className={styles.listItem}>
            <Link href={role === 'employee' ? `/admin/${navItemRoutes[i]}` : (token ? `/home/${navItemRoutes[i]}` : `#${item}`)}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      {token ? <Button variant='contained' sx={{backgroundColor: '#AF0FEC', position:'fixed', bottom: '20px'}} onClick={() => handleLogOut()}> Salir</Button> : null}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#4A0266'}} className={styles.nav}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
            Ylenia Estévez
          </Typography>
          {role === 'employee' ? null : <><IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleClick}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <PersonIcon/>
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={menuOpen}
            open={Boolean(menuOpen)}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            <Link href={'/Login'} className={styles.menuItem}>
              <MenuItem onClick={handleClose}>Iniciar sesión</MenuItem>
            </Link>
            <Link href={'/Signup'} className={styles.menuItem}>
              <MenuItem onClick={handleClose}>Crear cuenta</MenuItem>
            </Link>
          </Menu></>
          }
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#4A0266' }, 
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      
    </Box>
  );
}
 NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;