'use client'
import { Box, Button, Card, Typography } from "@mui/material";
import "./../../globals.css";
import style from "./appointment.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteAppointment, getAppointmentsById } from "@/service/customerService";
import { useEffect, useState } from "react";
export default function Appointments() {
  const token = localStorage.getItem("token")
  const [appointments, setAppointments] = useState([])
  const [update, setUpdate] = useState(0)
  
  const handleDelete = async (id) => {
    await deleteAppointment(id)
    setUpdate(update + 1)
  }

  useEffect(() => {
    allAppointments()
  }, [update])

  const allAppointments = async () => {
    const response = await getAppointmentsById()
    setAppointments(response)
  }
  
  return (
    <>
      <main className="container" id={style.content}>
        <Box sx={{ padding: "2rem 0", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <Typography variant="h1" className="title">
            Mis citas
          </Typography>
          {appointments && appointments.filter((appointment) => new Date(appointment.date) >= new Date()).map((appointment, index) => {
            const appoDate = appointment.date.split("T")[0].split("-").reverse().join("-")
            const time = appointment.date.split("T")[1].substr(0, 5)

            return (<Card
              sx={{
                display: "flex",
                gap: "5px",
                justifyContent: "space-between",
                width: "80%",
                padding: "1rem",
              }}
              key={index}
            >
              <Typography variant="h6">{`${appoDate} - ${time}`}</Typography>
              <Button variant="contained" color="error" className={style.button} onClick={() => {handleDelete(appointment._id )}}>
                <DeleteIcon />
              </Button>
            </Card>)})}
        </Box>
      </main>
    </>
  );
}
