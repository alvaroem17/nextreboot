"use client";
import {
  Box,
  Button,
  Card,
  Divider,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./appointments.module.css";
import {
  useState
} from 'react';

import {
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';

export default function Appointments() {
  const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  const hours = ["8:30", "9:30", "10:30", "14:30", "15:30", "16:30", "17:30"];

  const [week, setWeek] = useState('');

    const getWeeks = () => {
        const today = new Date();
        const weekDay = today.getDay();
        if(weekDay !== 1){
            const diff = weekDay-1;
            today.setDate(today.getDate()-diff)
        }
        let weeks = [];

        // Si hoy es antes del viernes, incluir la semana actual
        if (weekDay < 5) {
            weeks.push(`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`);
        }

        // Obtener las próximas 4 semanas
        for (let i = 0; i < 4; i++) {
            today.setDate(today.getDate() + 7);
            weeks.push(`${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()}`);
        }

        return weeks;
    };

    const handleChange = (event) => {
        setWeek(event.target.value);
    };


  const handleAppointment = (props) => {
    console.log(props);
    const format = props.week.split("/").reverse().join("-");
    const week = new Date(format)
    const hour = props.hour.split(":")
    const day = props.i
    week.setDate(week.getDate() + day);
    week.setUTCHours(hour[0],hour[1])
    console.log(week);
  
  };
  
  return (
    <>
      <main className="container">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "2rem 0",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "#4A0266",
              fontSize: "24pt",
              textAlign: "center",
            }}
          >
            Horas disponibles
          </Typography>
          <FormControl sx={{ width: "40%" }}>
            <InputLabel> Semana </InputLabel>
            <Select value={week} label="Semana" id='semana' onChange={handleChange}>
              {getWeeks().map((week, indice) => (
                <MenuItem key={indice} value={week}>
                  {" "}
                  {week}{" "}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          {days.map((day, i) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  flexDirection: "column",
                  width: "47%",
                }}
                key={i}
              >
                <Card className={styles.card}>
                  <Typography variant="h5">{day}</Typography>
                  <Divider className={styles.divider} />
                  {hours.map((hour, index) => {
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          gap: "5px",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                        key={hour}
                      >
                        <Typography variant="h6">{hour}</Typography>
                        <Button
                          variant="contained"
                          className={styles.button}
                          onClick={() => handleAppointment({ hour, i, week })}
                        >
                          <AddIcon />
                        </Button>
                      </Box>
                    );
                  })}
                </Card>
              </Box>
            );
          })}
        </Box>
      </main>
    </>
  );
}
