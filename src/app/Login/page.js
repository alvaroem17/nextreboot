'use client'
import AuthNav from "@/components/authNav/authNav";
import styles from "./login.module.css"
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { login } from "@/service/authService";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter()
  const handleLogin = async () => {
    try {
      const signupResponse = await login({email, password})
      localStorage.setItem("token", signupResponse.token)
      localStorage.setItem("userId", signupResponse.customerId ? signupResponse.customerId : signupResponse.employeeId)
      localStorage.setItem("rol", signupResponse.customerId ? "customer" : "employee")
      router.push(signupResponse.customerId ? "/home" : "/admin")
      //Do something with the response
    } catch (error) {
     //Handle the error
    }
  }

  return (
    <>
      <AuthNav />
      <main className={styles.main}>
        <Typography variant="h1" sx={{ color: '#4A0266', fontSize: '2rem', textAlign: 'center' }}>Iniciar sesión</Typography>
        <form className={styles.form}>
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email" onChange={(e) => setEmail(e.target.value)}/>
          <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'end', marginTop: '1rem'}}>
            <Button variant="contained" sx={{ backgroundColor: '#AF0FEC', color:'white'}} onClick={handleLogin}>Aceptar</Button>
            <Button variant="contained" color="error" href="/">Cancelar</Button>
          </Box>    
        </form>
      </main>
    </>
  )
}
