'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { usePathname } from 'next/navigation';

export default function AuthNav() {
    const currentRoute = usePathname()
    console.log(currentRoute)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'transparent', color: 'Black', boxShadow: 'none', padding: '10px 0'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
        <Typography
            variant="h5"
            component="div"
            sx={{ display: { xs: 'block', sm: 'block' } }}
          >
            Ylenia Estévez
          </Typography>
          <Button sx={{ backgroundColor: '#AF0FEC', color:'white', borderRadius: '4px', }}>{ currentRoute === "/Login" ? "Crear cuenta" : "Iniciar sesión"}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}