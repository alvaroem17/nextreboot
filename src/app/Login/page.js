import AuthNav from "@/components/authNav/authNav";
import styles from "./login.module.css"
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Login() {
  return (
    <>
      <AuthNav />
      <main className={styles.main}>
        <Typography variant="h1" className="title">Iniciar sesión</Typography>
        <form className={styles.form}>
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email"/>
          <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="password"/>
          <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'end', marginTop: '1rem'}}>
            <Button variant="contained" sx={{ backgroundColor: '#AF0FEC', color:'white'}}>Aceptar</Button>
            <Button variant="contained" color="error">Cancelar</Button>
          </Box>
            
        </form>
      </main>
    </>
  )
}
