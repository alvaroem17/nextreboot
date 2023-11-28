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

  const [semana, setSemana] = useState('');

    const obtenerSemanas = () => {
        const hoy = new Date();
        const diaSemana = hoy.getDay();
        if(diaSemana !== 1){
            const diff = diaSemana-1;
            hoy.setDate(hoy.getDate()-diff)
        }
        let semanas = [];

        // Si hoy es antes del viernes, incluir la semana actual
        if (diaSemana < 5) {
            semanas.push(`${hoy.getDate()}/${hoy.getMonth()+1}/${hoy.getFullYear()}`);
        }

        // Obtener las próximas 4 semanas
        for (let i = 0; i < 4; i++) {
            hoy.setDate(hoy.getDate() + 7);
            semanas.push(`${hoy.getDate()}/${hoy.getMonth()+1}/${hoy.getFullYear()}`);
        }

        return semanas;
    };

    const manejarCambio = (evento) => {
        setSemana(evento.target.value);
    };


  const handleAppointment = (props) => {
    console.log(props);
    const format = props.semana.split("/").reverse().join("-");
    const semana = new Date(format)
    const hora = props.hour.split(":")
    const day = props.i
    semana.setDate(semana.getDate() + day);
    semana.setUTCHours(hora[0],hora[1])
    console.log(semana);
  
  };
  /* aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}*/
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
            <Select value={semana} label="Semana" id='semana' onChange={manejarCambio}>
              {obtenerSemanas().map((semana, indice) => (
                <MenuItem key={indice} value={semana}>
                  {" "}
                  {semana}{" "}
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
                          onClick={() => handleAppointment({ hour, i, semana })}
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
