"use client";
import React, { useState } from "react";
import "../../../css/globals.css";
import Cardclient from "../Moleculas/CardClient";
import { Button, Grid, Box, Autocomplete, TextField } from "@mui/material";

export default function Clientes() {
  const region = ["Todas", "Tuxtla", "Comitan", "Comalapa"];
  const giroDeEmpresa = ["Cadena", "Farmacias", "Carnicerias", "Gobierno"];
  const nombreDeEmpresa = ["CocaCola", "Farmacia Santa Cruz", "Carniceria"];

  const [regionValue, setRegionValue] = useState([]);
  const [giroDeEmpresaValue, setgiroDeEmpresaValue] = useState([]);
  const [nombreDeEmpresaValue, setNombreDeEmpresaValue] = useState([]);

  const clientes = [
    {
      nombreEmpresa: "Coca",
      nombreCadena: "Norte Poniente",
      direccionCadena: "2 av sur pte entre 4ta pte y 3rapte",
    },
    {
      nombreEmpresa: "Coca",
      nombreCadena: "Norte Poniente",
      direccionCadena: "2 av sur pte entre 4ta pte y 3rapte",
    },
    {
      nombreEmpresa: "Coca",
      nombreCadena: "Norte Poniente",
      direccionCadena: "2 av sur pte entre 4ta pte y 3rapte",
    },
    {
      nombreEmpresa: "Coca",
      nombreCadena: "Norte Poniente",
      direccionCadena: "2 av sur pte entre 4ta pte y 3rapte",
    },
    {
      nombreEmpresa: "Coca",
      nombreCadena: "Norte Poniente",
      direccionCadena: "2 av sur pte entre 4ta pte y 3rapte",
    },
    {
      nombreEmpresa: "Coca",
      nombreCadena: "Norte Poniente",
      direccionCadena: "2 av sur pte entre 4ta pte y 3rapte",
    },
    {
      nombreEmpresa: "Coca",
      nombreCadena: "Norte Poniente",
      direccionCadena: "2 av sur pte entre 4ta pte y 3rapte",
    },
    {
      nombreEmpresa: "Coca",
      nombreCadena: "Norte Poniente",
      direccionCadena: "2 av sur pte entre 4ta pte y 3rapte",
    },
    {
      nombreEmpresa: "Coca",
      nombreCadena: "Norte Poniente",
      direccionCadena: "2 av sur pte entre 4ta pte y 3rapte",
    },
  ];



  //Use effect para renderizado condicional 

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="containerClientesFondo">
          <Grid
            container
            direction="row"
            justifyContent={"center"}
            alignContent={"flex-start"}
          >
            <Grid item xs={12} lg={12} display="flex" justifyContent={"center"}>
              <h1 >
                Clientes
              </h1>
            </Grid>
            <Grid
              item
              xs={12}
              lg={12}
              sx={{
                marginBottom: "20px",
              }}
            >
              <Grid container spacing={2} direction={"row"}>
                <Grid
                  item
                  xs={12}
                  lg={4}
                  display="flex"
                  justifyContent={"center"}
                >
                  <Box sx={{ width: "100%" }}>
                    <Autocomplete
                      disablePortal
                      id="region"
                      options={region}
                      getOptionLabel={(option) =>
                        typeof option === "string" || option instanceof String
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
                <Grid
                  item
                  xs={12}
                  lg={4}
                  display="flex"
                  justifyContent={"center"}
                >
                  <Box sx={{ width: "100%" }}>
                    <Autocomplete
                      disablePortal
                      id="Giro De Empresa"
                      options={giroDeEmpresa}
                      getOptionLabel={(option) =>
                        typeof option === "string" || option instanceof String
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
                        <TextField {...params} label="Giro De Empresa" />
                      )}
                    ></Autocomplete>
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={4}
                  display="flex"
                  justifyContent={"center"}
                >
                  <Box sx={{ width: "100%" }}>
                    <Autocomplete
                      disablePortal
                      id="nombreDeEmpresa"
                      options={nombreDeEmpresa}
                      getOptionLabel={(option) =>
                        typeof option === "string" || option instanceof String
                          ? option
                          : ""
                      }
                      required
                      onChange={(e, value) => {
                        console.log(value);
                        setNombreDeEmpresaValue(
                          "nombreDeEmpresa",
                          value !== null ? value : values.nombreDeEmpresa
                        );
                      }}
                      sx={{ width: "100%" }}
                      renderInput={(params) => (
                        <TextField {...params} label="Buscador" />
                      )}
                    ></Autocomplete>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container direction={"row"} spacing={2}>
                {clientes.map((cliente, index) => {
                  console.log(cliente);
                  return (
                    <Grid item xs={12} lg={4}>
                      <div key={index}>
                        <Cardclient c={cliente} />
                      </div>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="clientes-herramientas">
        <Button variant="contained" onClick={()=>{
          window.location.href="./agregarCliente"
        }}>AGREGAR</Button>
      </div>
    </>
  );
}
