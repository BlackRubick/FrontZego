"use client";
import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  TextField,
  Button,
  Box,
  styled,
  Stack,
  InputAdornment,
  IconButton,
  Autocomplete,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import { Formik } from "formik";

export default function AgregarCliente() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#10754a",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const region = ["Todas", "Tuxtla", "Comitan", "Comalapa"];
  const giroDeEmpresa = ["Cadena", "Farmacias", "Carnicerias", "Gobierno"];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
      <Formik
  initialValues={{
    nombre_cliente: "",
    nombre_sucursal: "",
    correo_cliente: "",
    contraseña: "",
    direccion: "",
    region: "",
    giro_empresa: ""
  }}
  onSubmit={async (values, { resetForm }) => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/agregar-empresa",
        values // Enviar solo los valores del formulario en lugar de un FormData
      );
      console.log(response.data);
      alert("Cliente Creado");
      resetForm(); // Restablecer el formulario después del envío
    } catch (error) {
      console.error(error);
    }
  }}
>

          {({ values, handleChange, handleSubmit }) => (
            <form
              className="containerAgregarClientesFondo"
              style={{ justifyContent: "center" }}
              onSubmit={handleSubmit}
            >
              <Grid container direction={"row"}>
                <Grid
                  item
                  xs={12}
                  display={"flex"}
                  justifyContent={"center"}
                  textAlign={"center"}
                >
                  <h1>AGREGA UN CLIENTE</h1>
                </Grid>
                <Grid item xs={12}>
                  <Grid container direction={"row"} spacing={2}>
                    <Grid item xs={12} lg={6}>
                      {/* Nombre del cliente */}
                      <TextField
                        fullWidth
                        placeholder="Nombre Del Cliente"
                        id="nombre_cliente"
                        multiline
                        required
                        value={values.nombre_cliente}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F7F7F9",
                          opacity: "75%",
                        }}
                      ></TextField>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      {/* Nombre de la sucursal */}
                      <TextField
                        fullWidth
                        placeholder="Nombre De la Sucursal"
                        id="nombre_sucursal"
                        multiline
                        required
                        value={values.nombre_sucursal}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F7F7F9",
                          opacity: "75%",
                        }}
                      ></TextField>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      {/* Dirección */}
                      <TextField
                        fullWidth
                        placeholder="Direccion"
                        id="direccion"
                        multiline
                        required
                        value={values.direccion}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F7F7F9",
                          opacity: "75%",
                        }}
                      ></TextField>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      {/* Región */}
                      <Box sx={{ width: "100%" }}>
                        <Autocomplete
                          disablePortal
                          id="region"
                          options={region}
                          getOptionLabel={(option) =>
                            typeof option === "string" ||
                            option instanceof String
                              ? option
                              : ""
                          }
                          onChange={(event, value) => {
                            handleChange("region")(value);
                          }}
                          value={values.region}
                          sx={{ width: "100%" }}
                          renderInput={(params) => (
                            <TextField {...params} label="Region" />
                          )}
                        ></Autocomplete>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      {/* Giro de la empresa */}
                      <Box sx={{ width: "100%" }}>
                        <Autocomplete
                          disablePortal
                          id="giro_empresa"
                          options={giroDeEmpresa}
                          getOptionLabel={(option) =>
                            typeof option === "string" ||
                            option instanceof String
                              ? option
                              : ""
                          }
                          onChange={(event, value) => {
                            handleChange("giro_empresa")(value);
                          }}
                          value={values.giro_empresa}
                          sx={{ width: "100%" }}
                          renderInput={(params) => (
                            <TextField {...params} label="Giro De Empresa" />
                          )}
                        ></Autocomplete>
                      </Box>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      {/* Correo del cliente */}
                      <TextField
                        fullWidth
                        placeholder="Correo del Cliente"
                        id="correo_cliente"
                        multiline
                        required
                        value={values.correo_cliente}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F7F7F9",
                          opacity: "75%",
                        }}
                      ></TextField>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      {/* Contraseña */}
                      <TextField
                        fullWidth
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña"
                        id="contraseña"
                        required
                        value={values.contraseña}
                        onChange={handleChange}
                        style={{
                          borderRadius: "5px",
                          backgroundColor: "#F7F7F9",
                          opacity: "75%",
                        }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      ></TextField>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} lg={3}></Grid>
              <Grid item xs={12} lg={6}>
                <Box>
                  <Stack spacing={2} direction="row">
                    <ColorButton type="submit" variant="contained" fullWidth>
                      AGREGAR
                    </ColorButton>
                  </Stack>
                </Box>
              </Grid>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}
