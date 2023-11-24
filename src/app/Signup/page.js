import AuthNav from "@/components/authNav/authNav";
import { Box, TextField, Typography,Button } from "@mui/material";
import styles from "./signup.module.css"

export default function Login() {
  return (
    <>
      <AuthNav />
      <main className={styles.main}>
        <Typography variant="h1" className="title">Crear cuenta</Typography>
        <form className={styles.form}>
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email"/>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" type="text"/>
          <TextField id="outlined-basic" label="Teléfono" variant="outlined" type="number"/>
          <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="password"/>
          <TextField id="outlined-basic" label="Confirmar contraseña" variant="outlined"  type="password"/>
          <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'end', marginTop: '1rem'}}>
            <Button variant="contained" sx={{ backgroundColor: '#AF0FEC', color:'white'}}>Aceptar</Button>
            <Button variant="contained" color="error" href="/">Cancelar</Button>
          </Box>  
        </form>
      </main>
    </>
  )
}
