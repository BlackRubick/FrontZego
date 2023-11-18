"use client";
import { Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import React from "react";
import "../../../css/globals.css";

export default function Login() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "white",
    opacity: "75%",
    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="containerLogin">
          <div className="padreImg">
            <div className="containerImgLogin"></div>
          </div>

          <div className="containerFormLogin">
            <div>
              <h1>Inicia Sesion</h1>
            </div>
            <div>
              <input type="text" placeholder="usuario" />
            </div>
            <div>
              <input type="text" placeholder="contraseña" />
            </div>
            <div>
              <Stack spacing={2} direction="row">
                <ColorButton variant="contained">Ingresar</ColorButton>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
