
  'use client'
import AuthNav from "@/components/authNav/authNav";
import { Box, TextField, Typography,Button } from "@mui/material";
import styles from "./signup.module.css"
import { useState,useContext } from "react";
import { useRouter } from "next/navigation";
import { signup } from "@/service/authService";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter()

  const handleSignup = async () => {
    try {
      if (password !== confirmPassword) return alert("Passwords do not match");
      const signupResponse = await signup({email, name, phone, password})
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
        <Typography variant="h1" sx={{ color: '#4A0266', fontSize: '2rem', textAlign: 'center' }}>Crear cuenta</Typography>
        <form className={styles.form}>
          <TextField id="outlined-basic" label="Email" variant="outlined" type="email" onChange={(e) => setEmail(e.target.value)}/>
          <TextField id="outlined-basic" label="Nombre" variant="outlined" type="text" onChange={(e) => setName(e.target.value)}/>
          <TextField id="outlined-basic" label="Teléfono" variant="outlined" type="number" onChange={(e) => setPhone(e.target.value)}/>
          <TextField id="outlined-basic" label="Contraseña" variant="outlined" type="password" onChange={(e) => setPassword(e.target.value)}/>
          <TextField id="outlined-basic" label="Confirmar contraseña" variant="outlined"  type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
          <Box sx={{ display: 'flex', gap: '5px', justifyContent: 'end', marginTop: '1rem'}}>
            <Button variant="contained" sx={{ backgroundColor: '#AF0FEC', color:'white'}} onClick={handleSignup}>Aceptar</Button>
            <Button variant="contained" color="error" href="/">Cancelar</Button>
          </Box>  
        </form>
      </main>
    </>
  )
}
