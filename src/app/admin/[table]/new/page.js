"use client";
import { createOne,getAll } from "@/service/adminService";
import { Box, Button, Card, Divider, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const router = useRouter()
  const tables = {
    customers: ["name", "phone", "email", "password"],
    appointments: ["date", "time", "description", "duration", "customer"],
    inventories: ["name", "quantity", "price"],
    suppliers: ["name", "phone", "email"],
  };

  const [values, setValues] = useState({})

  let title

  switch(params.table){
    case "customers":
      title = "Clientes"
      break
    case "appointments":
      title = "Reservas"
      break
    case "inventories":
      title = "Materiales"
      break
    case "suppliers":
      title = "Proveedores"
      break
  }

  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getCustomers()
  },[])

  const getCustomers = async () => {
    const response = await getAll("customers")
    setCustomers(response)
  }

  const handleChange = (key, value) => {
    values[key] = value
  }
  const onSubmit = async () => {
    if(values?.time && values?.date) {
      values.date = `${values.date}T${values.time}`
      delete values.time
    }
    console.log(values)
    const response = await createOne(params.table, values)
    console.log(response)
    router.back()
  }

  return (
    <>
      <main className="container">
        <Card sx={{ marginTop: "1rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "1rem",
            }}
          >
            <Typography
              variant="h1"
              sx={{ color: "#4A0266", fontSize: "2rem", textAlign: "center" }}
            >
              {title}
            </Typography>
          </Box>
          <Divider sx={{ margin: "1rem" }} />
          <Box sx={{ display: "flex", flexDirection: "column", padding: "2rem", gap: "1rem" }}>
            {
              tables[params.table].map((elem, index) => {
                if (elem === "customer") {
                  return (
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Customer</InputLabel>
                      <Select
                        label="customer"
                        onChange={(e) => handleChange(elem, e.target.value)}
                      >
                        {customers.map((customer) =>{
                            return <MenuItem value={customer._id}>{customer.name}</MenuItem>
                          })
                        }
                      </Select>
                    </FormControl>
                  );
                }else if(elem === "duration"){
                  return <TextField key={index} label={elem} type="number" variant="outlined" onChange={(e) => handleChange(elem, e.target.value)}/>
                }else if(elem === "time"){
                  return <TextField key={index} label={elem} type="time" variant="outlined" InputLabelProps={{ shrink: true }} onChange={(e) => handleChange(elem, e.target.value)}/>
                }else if(elem === "date"){
                  return <TextField key={index} label={elem} type="date" variant="outlined" InputLabelProps={{ shrink: true }} onChange={(e) => handleChange(elem, e.target.value)}/>
                }else if(elem === "password"){
                  return <TextField key={index} label={elem} type="password" variant="outlined" onChange={(e) => handleChange(elem, e.target.value)}/>
                }
                return <TextField key={index} label={elem} variant="outlined" onChange={(e) => handleChange(elem, e.target.value)}/>
            })
            }
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
                onClick={onSubmit}
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
