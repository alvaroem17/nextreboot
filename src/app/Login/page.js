'use client'
import AuthNav from "@/components/authNav/authNav";
import styles from "./login.module.css"
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState, useContext } from "react";
import { createCookie } from "@/service/cookies";
import { login } from "@/service/authService";
import { AuthContext } from "@/context/authcontext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {token, role, setToken, setRole} = useContext(AuthContext)

  const handleLogin = async () => {
    try {
      const signupResponse = await login({email, password})
      createCookie(signupResponse.token, signupResponse.customerId ? signupResponse.customerId : signupResponse.employeeId, signupResponse.customerId ? "customer" : "employee" )
      setToken(signupResponse.token)
      setRole(signupResponse.customerId ? "customer" : "employee")
      //Do something with the response
    } catch (error) {
     //Handle the error
    }
  }

  return (
    <>
      <AuthNav />
      <main className={styles.main}>
        <Typography variant="h1" className="title">Iniciar sesión</Typography>
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
