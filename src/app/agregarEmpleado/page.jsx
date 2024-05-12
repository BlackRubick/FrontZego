"use client";
import React, { useState } from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  Stack,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios";

export default function AgregarEmpleado() {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState(""); // Estado para almacenar el rol seleccionado

  const handleSubmit = async () => {
    try {
      const nombre = document.getElementById("nombre").value;
      const correo = document.getElementById("correo").value;
      const contraseña = document.getElementById("contraseña").value;

      // Enviar datos al backend
      await axios.post("http://127.0.0.1:5000/agregar-empleado", {
        nombre,
        correo,
        contraseña,
        tipoEmpleado: "", // Agrega el tipo de empleado aquí
        rol: selectedRole, // Agrega el rol seleccionado aquí
      });

      // Si la solicitud se completa correctamente, puedes redirigir o mostrar un mensaje de éxito
      alert("Empleado agregado correctamente");
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickShowPassword = () => {
    const input = document.getElementById("contraseña");
    input.type = input.type === "password" ? "text" : "password";
  };

  const handleRoleChange = (event) => {
    setSelectedRole(event.target.value); // Actualiza el rol seleccionado cuando cambia la selección del usuario
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          className="containerAgregarClientesFondo"
          style={{
            justifyContent: "center",
          }}
        >
          <Grid container direction={"row"}>
            <Grid
              item
              xs={12}
              display={"flex"}
              justifyContent={"center"}
              textAlign={"center"}
              style={{
                margin: "0px",
              }}
            >
              <h1>AGREGA UN EMPLEADO</h1>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction={"row"} spacing={2}>
                <Grid item xs={12} lg={1}></Grid>
                <Grid item xs={12} lg={5}>
                  <TextField
                    fullWidth
                    placeholder="Nombre Del Empleado"
                    id="nombre"
                    multiline
                    required
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#F7F7F9",
                      opacity: "75%",
                    }}
                  ></TextField>
                </Grid>
                <Grid item xs={12} lg={5}>
                  <TextField
                    fullWidth
                    placeholder="Correo del Cliente"
                    id="correo"
                    multiline
                    required
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#F7F7F9",
                      opacity: "75%",
                    }}
                  ></TextField>
                </Grid>
                <Grid item xs={12} lg={1}></Grid>
                <Grid item xs={12} lg={1}></Grid>
                <Grid item xs={12} lg={5}>
                  <OutlinedInput
                    type="password"
                    required
                    fullWidth
                    id="contraseña"
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => handleClickShowPassword()}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <InputLabel style={{ fontSize: 12 }}>Contraseña</InputLabel>
                </Grid>
                <Grid item xs={12} lg={1}></Grid>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  display={"flex"}
                  flexDirection={"row"}
                  justifyContent={"center"}
                >
                  <input
                    type="checkbox"
                    id="admin-checkbox"
                    value="admin"
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="admin-checkbox">Administrador</label>
                  <input
                    type="checkbox"
                    id="supervisor-checkbox"
                    value="supervisor"
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="supervisor-checkbox">Supervisor</label>
                  <input
                    type="checkbox"
                    id="cliente-checkbox"
                    value="cliente"
                    onChange={handleRoleChange}
                  />
                  <label htmlFor="cliente-checkbox">Cliente</label>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} lg={3}></Grid>
            <Grid item xs={12} lg={6}>
              <Box>
                <Stack spacing={2} direction="row">
                  <Button
                    variant="contained"
                    fullWidth
                    style={{
                      color: "black",
                      backgroundColor: "#10754a",
                      "&:hover": {
                        backgroundColor: "#D6D6D6",
                      },
                    }}
                    onClick={handleSubmit}
                  >
                    AGREGAR
                  </Button>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </form>
      </div>
    </>
  );
}
