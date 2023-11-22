import AuthNav from "@/components/authNav/authNav";
import styles from "./login.module.css"
import { Typography } from "@mui/material";

export default function Login() {
  return (
    <>
      <AuthNav />
      <main className={styles.main}>
        <Typography variant="h1" className="title">Iniciar sesión</Typography>
      </main>
    </>
  )
}
