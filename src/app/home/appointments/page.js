import { Box, Button, Card, Typography } from "@mui/material";
import "./../../globals.css";
import style from "./appointment.module.css";
import DeleteIcon from '@mui/icons-material/Delete';
export default function Location() {
  return (
    <>
      <main className="container" id={style.content}>
        <Box sx={{ padding: "2rem 0", width: "100%", display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem" }}>
          <Typography variant="h1" className="title">
            Mis citas
          </Typography>
          <Card
            sx={{
              display: "flex",
              gap: "5px",
              justifyContent: "space-between",
              width: "80%",
              padding: "1rem",
            }}
          >
            <Typography variant="h6">8:30 - 9:30</Typography>
            <Button variant="contained" color="error" className={style.button}>
              <DeleteIcon />
            </Button>
          </Card>
          <Card
            sx={{
              display: "flex",
              gap: "5px",
              justifyContent: "space-between",
              width: "80%",
              padding: "1rem",
            }}
          >
            <Typography variant="h6">8:30 - 9:30</Typography>
            <Button variant="contained" color="error" className={style.button}>
              <DeleteIcon />
            </Button>
          </Card>
        </Box>
      </main>
    </>
  );
}
