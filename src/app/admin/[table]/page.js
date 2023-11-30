'use client'
import { Box, Button, Card, Divider, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { notFound, usePathname, useRouter} from 'next/navigation'
import { useEffect, useState } from "react";
import { getAll } from "@/service/adminService";

export default function Page({ params }) {
  let tabla = ""
  switch (params.table) {
    case "customers": 
      tabla = "Clientes"
      break
    case "appointments":
      tabla = "Reservas"
      break
    case "inventories":
      tabla = "Materiales"
      break
    case "suppliers":
      tabla = "Proveedores"
      break
    default:
      return notFound()
  }
  const router = useRouter()
  const currentRoute = usePathname()

  const [elems, setElems] = useState([])

  useEffect(() => {
    getAllElems(params.table);
  }, []);

  const getAllElems = async (table) => {
    const response = await getAll(table);
    setElems(response);
  };

  const handleEdit = (props) => {
    router.push(`${currentRoute}/${props._id}`)
  }

    return (
      <>
        <main className="container">
          <Card sx={{ marginTop: '1rem' }}>
            <Box sx={{ display:"flex", justifyContent:"space-between", padding: "1rem" }} >
              <Typography variant="h1" sx={{ color: '#4A0266', fontSize: '2rem', textAlign: 'center' }}>{tabla}</Typography>
              <Button variant="contained" sx={{ backgroundColor: '#009A0F', color: 'white'}}>
                <AddIcon/>
              </Button>
            </Box>
            <Divider sx={{ margin: '1rem' }}/>
            <Box sx={{ display:"flex", flexDirection:"column", gap: "1rem", padding: "0 2rem 1rem", height: "max-content" }} >
              {elems && elems.map((cliente, index) => (
                <Box key={index} sx={{ display:"flex", justifyContent:"space-between"}}>
                  <Typography variant="p">{cliente.name || cliente.description}</Typography>
                  <Box sx={{display:"flex", gap:"5px"}}>
                    <Button variant="contained" sx={{ backgroundColor: '#EC0F0F', color: 'white', minWidth:"0.5rem", width:"1rem"}}><DeleteIcon/></Button>
                    <Button variant="contained" sx={{ backgroundColor: '#AF0FEC', color: 'white', minWidth:"0.5rem", width:"1rem"}} onClick={() =>handleEdit(cliente)}><EditIcon/></Button>
                  </Box>
                </Box>
              ))}
            </Box>
          </Card>
        </main>
      </>
    )
  }