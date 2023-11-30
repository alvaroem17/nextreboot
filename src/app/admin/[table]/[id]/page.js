'use client'
import { Box, Breadcrumbs, Button, Card, Divider, TextField, Typography } from "@mui/material";
import { notFound } from "next/navigation";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack'
import style from './id.module.css'
import { useEffect, useState } from "react";
import { getOne } from "@/service/adminService";

export default function Page({ params }) {
  const [elem, setElem] = useState() 

  useEffect(() => {
    getElem()
  },[])

  const getElem = async ()=>{
    const response = await getOne(params.table, params.id)
    setElem(response)
  }

  console.log(elem)
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
              {elem && Object.keys(elem).filter((key) => key !== "_id" && key !== "__v" && key !== "password").map((args, key) =>{
                return <TextField key={key} label={args} type="text" value={elem[args]}/>
              })
              }
              
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
