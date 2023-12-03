"use client";
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./appointments.module.css";
import { useEffect, useState } from "react";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import { addAppointment, getAppoinmentsUnavailable } from "@/service/customerService";

export default function Appointments() {
  const [days,setDays] = useState([{ day: "Lunes"}, { day: "Martes"}, { day: "Miercoles"}, { day: "Jueves"}, { day: "Viernes"}]);
  const hours = ["8:30", "9:30", "10:30", "14:30", "15:30", "16:30", "17:30"];
  const [appointments, setAppointments] = useState([]);
  const [update, setUpdate] = useState(0)

  const [week, setWeek] = useState("");

  useEffect(() => {
    allAppointments();
  }, [update,week]);

  const allAppointments = async () => {
    const response = await getAppoinmentsUnavailable(week.split("/").reverse().join("-"));
    setAppointments(response);

  };

  const getWeeks = () => {
    const today = new Date();
    const weekDay = today.getDay();
    if (weekDay !== 1) {
      const diff = weekDay - 1;
      today.setDate(today.getDate() - diff);
    }
    
    let weeks = [];
    
    // Si hoy es antes del viernes, incluir la semana actual
    if (weekDay < 5) {
      weeks.push(
        `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        );
    }
    
    // Obtener las próximas 4 semanas
    for (let i = 0; i < 4; i++) {
      today.setDate(today.getDate() + 7);
      weeks.push(
        `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`
        );
      }
      return weeks;
    };
    
    const handleChange = (event) => {
      setWeek(event.target.value);
      const date = new Date(event.target.value.split('/').reverse().join('-'));
      const todayCopy = new Date(event.target.value.split('/').reverse().join('-'))

      const weekDay = date.getDay();
      if (weekDay !== 1) {
        const diff = weekDay - 1;
        todayCopy.setDate(todayCopy.getDate() - diff);
      }
      const newDay = new Date(todayCopy.setDate(todayCopy.getDate()));
      days.forEach(day => {
        day.value = `${newDay.getFullYear()}-${newDay.getMonth() + 1}-${newDay.getDate()}`;
        newDay.setDate(newDay.getDate()+1)
      })

    };

  const handleAppointment = async (props) => {
    const date = new Date(props.date);
    const hour = props.hour.split(":");
    date.setUTCHours(hour[0], hour[1]);

    const response = await addAppointment({date, description:'Manicura', duration: 60});
    setUpdate(response);

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
            <Select
              value={week}
              label="Semana"
              id="semana"
              onChange={handleChange}
            >
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
          {days.map((day) => {
            return (
              <Box
                sx={{
                  display: "flex",
                  gap: "5px",
                  flexDirection: "column",
                  width: "47%",
                }}
                key={day.value}
              >
                <Card className={styles.card}>
                  <Typography variant="h5">{day.day}</Typography>
                  <Divider className={styles.divider} />
                  {hours.map((hour) => {
                    let isAppointment = appointments && appointments.some( (appointment) =>{
                      const date= new Date(appointment.date)
                      return (hour === `${date.getHours()}:${date.getMinutes()<10 ? '0'+date.getMinutes():date.getMinutes()}` && day.value === `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
                    }
                    )

                    if(!isAppointment){
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
                            sx={{ backgroundColor: "#009A0F", color: "white" }}
                            className={styles.button}
                            onClick={() => handleAppointment({ hour: hour, date: day.value })}
                          >
                            <AddIcon />
                          </Button>
                        </Box>
                      );
                    }
                    return null
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
