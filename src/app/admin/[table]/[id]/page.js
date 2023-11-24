import { Box, Breadcrumbs, Button, Card, Divider, TextField, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack'
import style from './id.module.css'

export default function Page({ params }) {
  if (isNaN(params.id)) return notFound();

  const cliente = {
    _id: 1,
    name: "pedro",
    email: "pedro@pedro.com",
    password: "pedro123",
    phone: 123456789,
  };

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/admin">
      Admin
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href={`/admin/${params.table}`}
    >
      {params.table}
    </Link>,
    <Typography key="3" color="text.primary">
      {params.id}
    </Typography>,
  ]
  return (
    <>
      <main className="container" id={style.content}>
        <Card sx={{ marginTop: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
          <Stack spacing={2}>
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          </Box>
          <Divider sx={{ margin: "1rem" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              padding: "0 2rem 1rem",
              height: "max-content",
            }}
          >
            <Box
              sx={{ display: "flex", flexDirection: "column",justifyContent: "space-between", gap: "1rem", padding: "0 2rem 1rem"}}
            >
              <TextField label="Nombre" type="text" value={cliente.name}></TextField>
              <TextField label="Email" type="email" value={cliente.email}></TextField>
              <TextField label="Teléfono" type="tel" value={cliente.phone}></TextField>
            </Box>
            <Box sx={{ display: "flex", gap: "5px", justifyContent: "flex-end"}}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#EC0F0F", color: "white" }}
                href={`/admin/${params.table}`}
              >
                Cancelar
              </Button>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#AF0FEC", color: "white" }}
              >
                Aceptar
              </Button>
            </Box>
          </Box>
        </Card>
      </main>
    </>
  );
}
