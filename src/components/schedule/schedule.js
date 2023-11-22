
import { Box, Card } from "@mui/material";
import "./../../app/globals.css";
import Typography from "@mui/material/Typography";
import styles from "./schedule.module.css";
export default function Schedule() {
    const schedule = ["8:30", "18:00"]
    const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"]

  return (
    <div className="container" id={styles.container}>
      <Typography variant="h1" className="title">
        Horarios
      </Typography>
      <Box sx={{ display: 'flex', gap: '5px'}}>
        {
          days.map((day, index) => (
            <Card key={day} sx={{ border: '1px solid black', display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent:'space-evenly'}} className={styles.card}>
              <Typography variant="h7" className={styles.title}>
                {day}
              </Typography>
              <hr className={styles.hr}/>
              <Typography variant="p" component="div" className={styles.text}>
                {schedule[0] + " - " + schedule[1]}
              </Typography>
            </Card>
          ))
        }
      </Box>
    </div>
  );
}
