import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import axios from 'axios';

export default function Cardclient({ cliente }) {
  const handleUpdate = () => {
    // Navegar a la página de edición junto con los datos del cliente
    window.location.href = `./editarCliente?id=${cliente.id}&nombre_cliente=${encodeURIComponent(cliente.nombre_cliente)}&nombre_sucursal=${encodeURIComponent(cliente.nombre_sucursal)}&direccion=${encodeURIComponent(cliente.direccion)}`;
  };

  const handleDelete = () => {
    axios.post("http://localhost:5000/eliminar-cliente", { id: cliente.id })
      .then(response => {
        // Manejar la respuesta si es necesario
        console.log(response.data.mensaje);
      })
      .catch(error => {
        console.error("Error al eliminar cliente:", error);
      });
  };

  return (
    <>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <Typography gutterBottom fontSize={30}>
                  {cliente.nombre_cliente}
                </Typography>
                <Typography variant="body2" fontSize={15} marginBottom={2}>
                  {cliente.nombre_sucursal}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {cliente.direccion}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction={"row"} spacing={2}>
                  <Grid item xs={6}>
                    <Button variant="body2" onClick={handleUpdate}>
                      Editar
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="body2" onClick={handleDelete}>
                      Eliminar
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
