import { Box, Button, Card, Divider, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { notFound } from 'next/navigation'

export default function Page({ params }) {
  let tabla = ""
  switch (params.table) {
    case "customers": 
      tabla = "Clientes"
      break
    case "appointments":
      tabla = "Reservas"
      break
    case "inventory":
      tabla = "Materiales"
      break
    case "suppliers":
      tabla = "Proveedores"
      break
    default:
      return notFound()
  }

  const clientes = [ "pedro", "juan", "luis","carlos" ]

    return (
      <>
        <main className="container">
          <Card sx={{ marginTop: '1rem' }}>
            <Box sx={{ display:"flex", justifyContent:"space-between", padding: "1rem" }} >
              <Typography variant="h1" className="title">{tabla}</Typography>
              <Button variant="contained" sx={{ backgroundColor: '#009A0F', color: 'white'}}>
                <AddIcon/>
              </Button>
            </Box>
            <Divider sx={{ margin: '1rem' }}/>
            <Box sx={{ display:"flex", flexDirection:"column", gap: "1rem", padding: "0 2rem 1rem", height: "max-content" }} >
              {clientes.map((cliente, index) => (
                <Box key={index} sx={{ display:"flex", justifyContent:"space-between"}}>
                  <Typography variant="p">{cliente}</Typography>
                  <Box sx={{display:"flex", gap:"5px"}}>
                    <Button variant="contained" sx={{ backgroundColor: '#EC0F0F', color: 'white'}}><DeleteIcon/></Button>
                    <Button variant="contained" sx={{ backgroundColor: '#AF0FEC', color: 'white'}}><EditIcon/></Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>
        </main>
      </>
    )
  }