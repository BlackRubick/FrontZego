"use client";
import React from "react";
import "../../../css/globals.css";
import "../Orgnanismos/organismos.css";
import { useState } from "react";
import "../../../public/download-solid.svg";
import {
  Button,
  styled,
  Stack,
  Grid,
  Box,
  Autocomplete,
  TextField,
} from "@mui/material";

export default function Reportes() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#10754a",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));
  const fecha = [
    "21/09/2023",
    "30/10/2024",
    "31/04/2024",
    "21/09/2023",
    "30/10/2024",
    "31/04/2024",
    "21/09/2023",
    "30/10/2024",
    "31/04/2024",
  ]; //aqui se van a consumir las fechas
  const [fechaValue, setFechaValue] = useState([]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="containerCardsReportesFondo">
          <Grid
            container
            spacing={2}
            style={{
              display: "flex",
              flexDirection: "row",
              margin: "5px",
            }}
          >
            <Grid
              item
              display={"flex"}
              justifyContent={"center"}
              xs={12}
              style={{
                margin: 0,
              }}
            >
              <h1
                style={{
                  textAlign: "center",
                  margin: "0px",
                }}
              >
                "Oxxo"
              </h1>
            </Grid>
            <Grid item display={"flex"} justifyContent={"center"} xs={12}>
              <h2
                style={{
                  textAlign: "center",
                  margin: "0px",
                  marginBottom: "15px",
                }}
              >
                "Poniente Sur"
              </h2>
            </Grid>

            <Grid
              item
              xs={12}
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="cardReporte">
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={6} lg={4}>
                    <div
                      style={{
                        width: "100%",
                        height: "50%",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        Licencia Sanitaria
                      </h1>
                    </div>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <Box sx={{ width: "100%" }}>
                      <Autocomplete
                        disablePortal
                        id="fecha"
                        options={fecha}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        onChange={(e, value) => {
                          console.log(value);
                          setFechaValue(
                            "fecha",
                            value !== null ? value : values.fecha
                          );
                          // aca haremos los cambios de renderizacion de cards por region
                        }}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Fecha" />
                        )}
                      ></Autocomplete>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Grid container spacing={0} direction={"row"}>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/117/117885.png"
                          alt="agregar"
                          className="add"
                          onClick={() => {
                            window.location.href = "./agregarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn.icon-icons.com/icons2/931/PNG/512/edit_modify_icon-icons.com_72390.png"
                          alt="imagen"
                          className="download"
                          onClick={() => {
                            window.location.href = "./editarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                          alt="imagen"
                          className="add"
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/000/574/204/original/vector-sign-of-download-icon.jpg"
                          alt="imagen"
                          className="download"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="cardReporte">
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={6} lg={4}>
                    <div
                      style={{
                        width: "100%",
                        height: "50%",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        Orden De Servicio Sencilla
                      </h1>
                    </div>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <Box sx={{ width: "100%" }}>
                      <Autocomplete
                        disablePortal
                        id="fecha"
                        options={fecha}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        onChange={(e, value) => {
                          console.log(value);
                          setFechaValue(
                            "fecha",
                            value !== null ? value : values.fecha
                          );
                          // aca haremos los cambios de renderizacion de cards por region
                        }}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Fecha" />
                        )}
                      ></Autocomplete>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Grid container spacing={0} direction={"row"}>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/117/117885.png"
                          alt="agregar"
                          className="add"
                          onClick={() => {
                            window.location.href = "./agregarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn.icon-icons.com/icons2/931/PNG/512/edit_modify_icon-icons.com_72390.png"
                          alt="imagen"
                          className="download"
                          onClick={() => {
                            window.location.href = "./editarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                          alt="imagen"
                          className="add"
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/000/574/204/original/vector-sign-of-download-icon.jpg"
                          alt="imagen"
                          className="download"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="cardReporte">
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={6} lg={4}>
                    <div
                      style={{
                        width: "100%",
                        height: "50%",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        Reporte De Inspeccion a Nivel Piso
                      </h1>
                    </div>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <Box sx={{ width: "100%" }}>
                      <Autocomplete
                        disablePortal
                        id="fecha"
                        options={fecha}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        onChange={(e, value) => {
                          console.log(value);
                          setFechaValue(
                            "fecha",
                            value !== null ? value : values.fecha
                          );
                          // aca haremos los cambios de renderizacion de cards por region
                        }}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Fecha" />
                        )}
                      ></Autocomplete>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Grid container spacing={0} direction={"row"}>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/117/117885.png"
                          alt="agregar"
                          className="add"
                          onClick={() => {
                            window.location.href = "./agregarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn.icon-icons.com/icons2/931/PNG/512/edit_modify_icon-icons.com_72390.png"
                          alt="imagen"
                          className="download"
                          onClick={() => {
                            window.location.href = "./editarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                          alt="imagen"
                          className="add"
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/000/574/204/original/vector-sign-of-download-icon.jpg"
                          alt="imagen"
                          className="download"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="cardReporte">
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={6} lg={4}>
                    <div
                      style={{
                        width: "100%",
                        height: "50%",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        Reporte De Revision de Trampas de Luz
                      </h1>
                    </div>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <Box sx={{ width: "100%" }}>
                      <Autocomplete
                        disablePortal
                        id="fecha"
                        options={fecha}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        onChange={(e, value) => {
                          console.log(value);
                          setFechaValue(
                            "fecha",
                            value !== null ? value : values.fecha
                          );
                          // aca haremos los cambios de renderizacion de cards por region
                        }}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Fecha" />
                        )}
                      ></Autocomplete>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Grid container spacing={0} direction={"row"}>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/117/117885.png"
                          alt="agregar"
                          className="add"
                          onClick={() => {
                            window.location.href = "./agregarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn.icon-icons.com/icons2/931/PNG/512/edit_modify_icon-icons.com_72390.png"
                          alt="imagen"
                          className="download"
                          onClick={() => {
                            window.location.href = "./editarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                          alt="imagen"
                          className="add"
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/000/574/204/original/vector-sign-of-download-icon.jpg"
                          alt="imagen"
                          className="download"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              style={{
                marginBottom: "20px",
              }}
            >
              <div className="cardReporte">
                <Grid container spacing={2} direction={"row"}>
                  <Grid item xs={6} lg={4}>
                    <div
                      style={{
                        width: "100%",
                        height: "50%",
                      }}
                    >
                      <h1
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                        }}
                      >
                        Orden De Servicio Cadenas
                      </h1>
                    </div>
                  </Grid>
                  <Grid item xs={6} lg={4}>
                    <Box sx={{ width: "100%" }}>
                      <Autocomplete
                        disablePortal
                        id="fecha"
                        options={fecha}
                        getOptionLabel={(option) =>
                          typeof option === "string" || option instanceof String
                            ? option
                            : ""
                        }
                        onChange={(e, value) => {
                          console.log(value);
                          setFechaValue(
                            "fecha",
                            value !== null ? value : values.fecha
                          );
                          // aca haremos los cambios de renderizacion de cards por region
                        }}
                        sx={{ width: "100%" }}
                        renderInput={(params) => (
                          <TextField {...params} label="Fecha" />
                        )}
                      ></Autocomplete>
                    </Box>
                  </Grid>
                  <Grid item xs={12} lg={4}>
                    <Grid container spacing={0} direction={"row"}>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/117/117885.png"
                          alt="agregar"
                          className="add"
                          onClick={() => {
                            window.location.href = "./agregarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn.icon-icons.com/icons2/931/PNG/512/edit_modify_icon-icons.com_72390.png"
                          alt="imagen"
                          className="download"
                          onClick={() => {
                            window.location.href = "./editarLicenciaSanitaria";
                          }}
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                          alt="imagen"
                          className="add"
                        />
                      </Grid>
                      <Grid item xs={6} lg={3}>
                        <img
                          src="https://static.vecteezy.com/system/resources/previews/000/574/204/original/vector-sign-of-download-icon.jpg"
                          alt="imagen"
                          className="download"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}
