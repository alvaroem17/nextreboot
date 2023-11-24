import { Box, Divider, Typography } from "@mui/material";
import style from './admin.module.css'

export default function Home() {
    return (
      <main className="container" id={style.content}>
        <Box sx={{ width: '100%', padding: '1rem'}}>
          <Typography variant="h5" sx={{ color: "#4A0266"}}>
            Panel de administración para el administrador
          </Typography>
          <Divider/>
          <Typography variant="h6">
            Aqui podras gestionar clientes, reservas, materiales y proveedores.
            Para empezar selecciona la tabla.
          </Typography>
        </Box>
      </main>
    )
  }