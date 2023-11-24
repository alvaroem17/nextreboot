import "./../../app/globals.css";
import Typography from "@mui/material/Typography";
import { Box, Card } from "@mui/material";
import styles from "./contact.module.css";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
export default function Contact() {
  return (
    <div className="container" id="Contáctanos">
      <Typography variant="h1" className="title">
        Contáctanos
      </Typography>
      <Card className={styles.card}>
        <Box className={styles.box}>
          <Typography className={styles.title}>Correo</Typography>
          <EmailIcon />
          <Typography>example@example.com</Typography>
        </Box>
        <Box className={styles.box}>
          <Typography className={styles.title}>Teléfono</Typography>
          <LocalPhoneIcon />
          <Typography>987123654</Typography>
        </Box>
        <Box className={styles.box}>
          <Typography className={styles.title}>Instagram</Typography>
          <InstagramIcon />
          <Typography>@example</Typography>
        </Box>
        <Box className={styles.box}>
          <Typography className={styles.title}> Facebook</Typography>
          <FacebookIcon />
          <Typography>example</Typography>
        </Box>
      </Card>
    </div>
  );
}
