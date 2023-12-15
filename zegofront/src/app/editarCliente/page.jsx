"use client";
import React from "react";
import {
  Grid,
  TextField,
  Button,
  Box,
  styled,
  Stack,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Autocomplete,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import "../../../css/globals.css";
import { Formik } from "formik";

export default function editarCliente() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#10754a",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const region = ["Todas", "Tuxtla", "Comitan", "Comalapa"]; //aqui se van a consumir las regiones que dejemos por default
  const giroDeEmpresa = ["Cadena", "Farmacias", "Carnicerias", "Gobierno"]; //aqui se van a consumir los tipos de empresasa que dejemos

  const [regionValue, setRegionValue] = useState([]);
  const [giroDeEmpresaValue, setgiroDeEmpresaValue] = useState([]);
  return (
    <>
      <Formik
      initialValues={{
        name: "",
        nameSucursal: "",
        mail: "",
        password: "",
        direccionSucursal: "",
        giroDeEmpresa: "",
        region: "",
      }}
      onSubmit={async (values) => {
        try {
          console.log(values);
          //token
          axios
            .put("http://localhost:8080/", {
              name: values.name,
              nameSucursal: values.nameSucursal,
              mail: values.mail,
              password: values.password,
              direccionSucursal: values.direccionSucursal,
              giroDeEmpresa: values.giroDeEmpresa,
              region: values.region,
              token: token,//token
            })
            .then((response) => {
              console.log(response);
              alert("Cliente Editado");
              window.location.href = "http://localhost:3000/clientes";

            });
        } catch (error) {
          console.error(error);
        }
      }}
      >
        {({ errors, handleChange, handleSubmit, values, setFieldValue }) => (
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
                >
                  <h1>EDITAR "COCA"</h1>
                </Grid>
                <Grid item xs={12}>
                  <Grid container direction={"row"} spacing={2}>
                    <Grid item xs={12} lg={6}>
                      <label
                        for="images"
                        class="drop-container"
                        id="dropcontainer"
                      >
                        <span class="drop-title">Agrega La imagen</span>
                        <span class="drop-title">Del Cliente</span>
                        ó
                        <input
                          type="file"
                          id="images"
                          accept="image/*"
                          required
                        />
                      </label>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                      <Grid container direction={"row"} spacing={2}>
                        <Grid item xs={12} lg={6}>
                          <TextField
                            fullWidth
                            placeholder="Nombre Del Cliente"
                            id="name"
                            multiline
                            required
                            onChange={handleChange}
                            error={Boolean(errors.valores)}
                            helperText={errors.valores}
                            style={{
                              borderRadius: "5px",
                              backgroundColor: "#F7F7F9",
                              opacity: "75%",
                            }}
                          ></TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <TextField
                            fullWidth
                            placeholder="Nombre De la Sucursal"
                            id="nameSucursal"
                            multiline
                            required
                            onChange={handleChange}
                            error={Boolean(errors.valores)}
                            helperText={errors.valores}
                            style={{
                              borderRadius: "5px",
                              backgroundColor: "#F7F7F9",
                              opacity: "75%",
                            }}
                          ></TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <TextField
                            fullWidth
                            placeholder="Direccion"
                            id="direccionSucursal"
                            multiline
                            required
                            onChange={handleChange}
                            error={Boolean(errors.valores)}
                            helperText={errors.valores}
                            style={{
                              borderRadius: "5px",
                              backgroundColor: "#F7F7F9",
                              opacity: "75%",
                            }}
                          ></TextField>
                        </Grid>

                        <Grid item xs={12} lg={6}>
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
                              onChange={(e, value) => {
                                console.log(value);
                                setRegionValue(
                                  "region",
                                  value !== null ? value : values.region
                                );
                                // aca haremos los cambios de renderizacion de cards por region
                              }}
                              sx={{ width: "100%" }}
                              renderInput={(params) => (
                                <TextField {...params} label="Region" />
                              )}
                            ></Autocomplete>
                          </Box>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <Box sx={{ width: "100%" }}>
                            <Autocomplete
                              disablePortal
                              id="Giro De Empresa"
                              options={giroDeEmpresa}
                              getOptionLabel={(option) =>
                                typeof option === "string" ||
                                option instanceof String
                                  ? option
                                  : ""
                              }
                              required
                              onChange={(e, value) => {
                                console.log(value);

                                setgiroDeEmpresaValue(
                                  "giroDeEmpresa",
                                  value !== null ? value : values.giroDeEmpresa
                                );
                              }}
                              sx={{ width: "100%" }}
                              renderInput={(params) => (
                                <TextField
                                  {...params}
                                  label="Giro De Empresa"
                                />
                              )}
                            ></Autocomplete>
                          </Box>
                        </Grid>

                        <Grid item xs={12} lg={6}>
                          <TextField
                            fullWidth
                            placeholder="Correo del Cliente"
                            id="mail"
                            multiline
                            required
                            onChange={handleChange}
                            error={Boolean(errors.valores)}
                            helperText={errors.valores}
                            style={{
                              borderRadius: "5px",
                              backgroundColor: "#F7F7F9",
                              opacity: "75%",
                            }}
                          ></TextField>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                          <OutlinedInput
                            type={showPassword ? "text" : "password"}
                            required
                            onChange={handleChange}
                            id="password"
                            endAdornment={
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
                            }
                          />
                          <InputLabel style={{ fontSize: 12 }}>
                            Contraseña
                          </InputLabel>
                        </Grid>
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
                <Grid item xs={12} lg={3}></Grid>
              </Grid>
            </form>
          </div>
        )}
      </Formik>
    </>
  );
}
