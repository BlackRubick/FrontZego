import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import logo from "../../../public/coca.png";
import { Button } from "@mui/material";

export default function Cardclient({ c }) {
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });

  const handleUpdate = ()=>{
    //Update
    window.location.href="./editarCliente"
  }

  const handleDelete = ()=>{
    //Delete
  }


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
          <Grid item>
            <ButtonBase
              sx={{ width: 128, height: 128 }}
              onClick={() => {
                // aqui seteamos el id del animal global
                window.location.href="./reportes"
              }}
            >
              <img className="animalito" alt="complex" src="http://1.bp.blogspot.com/-FJPLSHI4cVY/T0Kt3koo-gI/AAAAAAABLRU/yelxxfmKiSY/s1600/Coca_Cola_Logo1.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item>
                <Typography gutterBottom fontSize={30}>
                  {c.nombreEmpresa}
                </Typography>
                <Typography variant="body2" fontSize={15} marginBottom={2}>
                  {c.nombreCadena}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {c.direccionCadena}
                </Typography>
              </Grid>
              <Grid item>
                <Grid container direction={"row"} spacing={2}>
                  <Grid item xs={6}>
                    <Button variant="body2" onClick={handleUpdate}>Editar</Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="body2" onClick={handleDelete}>Eliminar</Button>
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
