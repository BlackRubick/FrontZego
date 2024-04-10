"use client";
import React, { useState } from "react";
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
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import axios from "axios"; // Importa axios para realizar solicitudes HTTP

export default function AgregarCliente() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "#10754a",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [nameSucursal, setNameSucursal] = useState("");
  const [password, setPassword] = useState("");
  const [direccionSucursal, setDireccionSucursal] = useState("");
  const [mail, setMail] = useState("");
  const [regionValue, setRegionValue] = useState([]);
  const [giroDeEmpresaValue, setGiroDeEmpresaValue] = useState([]);

  const handleGiroDeEmpresa = (event, value) => {
    if (value) {
      setGiroDeEmpresaValue(value);
    } else {
      setGiroDeEmpresaValue("");
    }
  };

  const handleRegionValue = (event, value) => {
    if (value) {
      setRegionValue(value);
    } else {
      setRegionValue("");
    }
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/editar-cliente/${cliente.id}`, {
        nombre_cliente: name,
        nombre_sucursal: nameSucursal,
        // Añade aquí todas las propiedades que quieras actualizar
      });
      
      console.log(response.data);
      alert("Cliente Actualizado");
      // Redirige a la página de clientes después de actualizar el cliente
      window.location.href = "http://localhost:3000/clientes";
    } catch (error) {
      console.error("Error al actualizar cliente:", error);
    }
  };
  const region = ["Todas", "Tuxtla", "Comitan", "Comalapa"];
  const giroDeEmpresa = ["Cadena", "Farmacias", "Carnicerias", "Gobierno"];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        className="containerAgregarClientesFondo"
        style={{ justifyContent: "center" }}
        onSubmit={handleSubmit}
      >
        <Grid container direction={"row"}>
          <Grid item xs={12} display={"flex"} justifyContent={"center"} textAlign={"center"}>
            <h1>EDITAR " "</h1>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction={"row"} spacing={2}>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  placeholder="Nombre Del Cliente"
                  id="name"
                  multiline
                  required
                  onChange={(event) => setName(event.target.value)}
                  value={name}
                  style={{ borderRadius: "5px", backgroundColor: "#F7F7F9", opacity: "75%" }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  placeholder="Nombre De la Sucursal"
                  id="nameSucursal"
                  multiline
                  required
                  value={nameSucursal}
                  onChange={(event) => setNameSucursal(event.target.value)}
                  style={{ borderRadius: "5px", backgroundColor: "#F7F7F9", opacity: "75%" }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  placeholder="Direccion"
                  id="direccionSucursal"
                  multiline
                  required
                  value={direccionSucursal}
                  onChange={(event) => setDireccionSucursal(event.target.value)}
                  style={{ borderRadius: "5px", backgroundColor: "#F7F7F9", opacity: "75%" }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box sx={{ width: "100%" }}>
                  <Autocomplete
                  
                    disablePortal
                    id="region"
                    options={region}
                    getOptionLabel={(option) =>
                      typeof option === "string" || option instanceof String ? option : ""
                    }
                    onChange={handleRegionValue}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} label="Region" />}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box sx={{ width: "100%" }}>
                  <Autocomplete
                    disablePortal
                    id="Giro De Empresa"
                    options={giroDeEmpresa}
                    getOptionLabel={(option) =>
                      typeof option === "string" || option instanceof String ? option : ""
                    }
                    required
                    onChange={handleGiroDeEmpresa}
                    sx={{ width: "100%" }}
                    renderInput={(params) => <TextField {...params} label="Giro De Empresa" />}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <TextField
                  fullWidth
                  placeholder="Correo del Cliente"
                  id="mail"
                  multiline
                  required
                  value={mail}
                  onChange={(event) => setMail(event.target.value)}
                  style={{ borderRadius: "5px", backgroundColor: "#F7F7F9", opacity: "75%" }}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <OutlinedInput
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  fullWidth
                  id="password"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        onClick={() => setShowPassword(!showPassword)}
                        onMouseDown={(event) => event.preventDefault()}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <InputLabel style={{ fontSize: 12 }}>Contraseña</InputLabel>
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
        </Grid>
      </form>
    </div>
  );
}
