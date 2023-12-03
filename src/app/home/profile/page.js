'use client'
import { Box, Button, TextField, Typography } from "@mui/material";
import style from "./profile.module.css";

export default function Profile() {
  return (
    <>
      <main className="container" id={style.content}>
        <Box sx={{ padding: "2rem 0", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <Typography className="title" variant="h1">
            Editar perfil
          </Typography>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" type="text"/>
          <TextField id="outlined-basic" label="Teléfono" variant="outlined" type="number"/>
          <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="password"/>
          <TextField id="outlined-basic" label="Confirmar contraseña" variant="outlined"  type="password"/>
          <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'end', marginTop: '1rem'}}>
            <Button variant="contained" sx={{ backgroundColor: '#AF0FEC'}}>Aceptar</Button>
            <Button variant="contained" sx={{ backgroundColor: '#4A0266'}} href="/home">Cancelar</Button>
          </Box>  
        </Box> 
      </main>
    </>
  );
}
