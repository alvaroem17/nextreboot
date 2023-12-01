"use client";
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import style from "./id.module.css";
import { useEffect, useState } from "react";
import { getOne, updateOne } from "@/service/adminService";

import EditIcon from "@mui/icons-material/Edit";
import UndoIcon from "@mui/icons-material/Undo";
import { useRouter } from "next/navigation";

export default function Page({ params }) {
  const [elem, setElem] = useState();
  const [edit, setEdit] = useState({});
  const [modification, setModification] = useState({});

  const router = useRouter();

  useEffect(() => {
    getElem();
  }, []);

  const getElem = async () => {
    const response = await getOne(params.table, params.id);
    setElem(response);
    Object.keys(response).forEach((key) => {
      edit[key] = false;
    });
  };

  const handleChange = (args, value) => {
    modification[args] = value;
    setModification({ ...modification });
  };

  const handleEdit = (props) => {
    edit[props] = !edit[props];
    edit[props] === false ? delete modification[props] : null;
    setEdit({ ...edit });
  };

  const onSubmit = async () => {
    await updateOne(params.table, params.id, modification);
    router.back();
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
  ];
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
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                gap: "1rem",
                padding: "0 0 1rem",
              }}
            >
              {elem &&
                Object.keys(elem)
                  .filter(
                    (key) =>
                      key !== "_id" && key !== "__v" && key !== "password"
                  )
                  .map((args, key) => {
                    if (args === "date") {
                      return edit[args] ? (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <TextField
                            key={key}
                            label={args}
                            type="datetime-local"
                            onChange={(e) => handleChange(args, e.target.value)}
                            InputLabelProps={{ shrink: true }}
                          />
                          <Button onClick={() => handleEdit(args)}>
                            <UndoIcon />
                          </Button>
                        </Box>
                      ) : (
                        <>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <Typography key={key}>
                              {" "}
                              {`${args}: ${elem[args].slice(
                                0,
                                elem[args].indexOf("T")
                              )}`}
                            </Typography>

                            <Button onClick={() => handleEdit(args)}>
                              <EditIcon />
                            </Button>
                          </Box>
                          <Typography key={key}>{`time: ${elem[args].slice(
                            elem[args].indexOf("T") + 1,
                            elem[args].lastIndexOf(":")
                          )}`}</Typography>
                        </>
                      );
                    }
                    return edit[args] ? (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <TextField
                          key={key}
                          label={args}
                          type={"text"}
                          onChange={(e) => handleChange(args, e.target.value)}
                        />
                        <Button onClick={() => handleEdit(args)}>
                          <UndoIcon />
                        </Button>
                      </Box>
                    ) : (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          key={key}
                        >{`${args}: ${elem[args]}`}</Typography>
                        <Button onClick={() => handleEdit(args)}>
                          <EditIcon />
                        </Button>
                      </Box>
                    );
                  })}
            </Box>
            <Box
              sx={{ display: "flex", gap: "5px", justifyContent: "flex-end" }}
            >
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
                onClick={() => onSubmit()}
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
