
import "./../../app/globals.css";
import Typography from "@mui/material/Typography";
export default function Location() {
  return (
    <div className="container" id="¿Dónde estamos?">
      <Typography variant="h1" sx={{ color: '#4A0266', fontSize: '2rem', textAlign: 'center' }}>
        ¿Dónde estamos?
      </Typography>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d854.7067357484784!2d-15.451847774817702!3d28.11584635843212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc4095005b4192c1%3A0xc15cbc20c94fac81!2sC.%20Tulip%C3%A1n%2C%202%2C%2035010%20Las%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1700650899995!5m2!1ses!2ses" width={'100%'} height="500" loading="lazy"></iframe>
    </div>
  );
}
