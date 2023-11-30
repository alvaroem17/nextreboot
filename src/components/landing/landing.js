import Image from "next/image";
import "./../../app/globals.css";
import Typography from "@mui/material/Typography";
import yleLogo from "./../../../public/img/yleLogo.jpeg";
export default function Landing() {
  return (
    <div className="container" id="Inicio">
      <Typography variant="h1" sx={{ color: '#4A0266', fontSize: '2rem', textAlign: 'center', marginTop: '2rem' }}>
        ¿Quiénes somos?
      </Typography>
      <Image src={yleLogo} width={300} height={300} placeholder="blur" className="logo" alt="Ylenia Estévez Logo"/>
      <Typography variant="p" component="div" className="text">
        Manicura profesional, te ofrecemos una amplia gama de servicios de manicura y pedicura.
      </Typography>
      <Typography variant="p" component="div" sx={{ fontSize: '1.2rem',fontWeight: 600, fontStyle: 'italic',textAlign: 'center', color: '#4A0266' }}>
        ¡Ven a visitarnos y deja que te cuidemos!
      </Typography>
    </div>
  );
}
