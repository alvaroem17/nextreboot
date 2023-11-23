"use client";
import {
  Box,
  Button,
  Card,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styles from "./appointments.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function Appointments() {
  const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  const hours = ["8:30", "9:30", "10:30", "14:30", "15:30", "16:30", "17:30"];
/* aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}*/
  return (
    <>
      <main className="container">
        <Box sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", padding: "2rem 0"}}>
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
          <Button            
            variant="contained"
            disableElevation 
            endIcon={<KeyboardArrowDownIcon />}
            sx={{
              backgroundColor: "#AF0FEC",
              color: "white",
              margin: "0",
              height: "2rem",
            }}>
              Semana
            </Button>
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
              >
                <Card className={styles.card}>
                  <Typography variant="h5">{day}</Typography>
                  <Divider className={styles.divider} />
                  {hours.map((hour) => {
                    return (
                      <Box
                        sx={{
                          display: "flex",
                          gap: "5px",
                          justifyContent: "space-between",
                          width: "100%",
                        }}
                      >
                        <Typography variant="h6">{hour}</Typography>
                        <Button variant="contained" className={styles.button}>
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
