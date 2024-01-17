"use client";
import axios from 'axios';
import { Grid, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import React from "react";
import "../../../css/globals.css";
import { Formik } from "formik";

export default function Login() {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "black",
    backgroundColor: "white",

    "&:hover": {
      backgroundColor: "#D6D6D6",
    },
  }));


  const baseUrl = "http://localhost:8080/auth/login";

  const loginUser = async (values, baseUrl) => {
    try {
      const response = await axios.post(baseUrl, {
        email: values.user,
        password: values.password,
      });

      const token = response.data.accessToken;

      if (response.data !== "") {

        window.location.href = "http://localhost:3000/login";
      } else {
        console.log("Usuario o Contraseña incorrecta");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          user: "",
          password: "",
        }}
        onSubmit={async (values) => {
          await loginUser(values, baseUrl);
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, values }) => (
          <form
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            onSubmit={handleSubmit}
          >
            <div className="containerLogin">
              <div className="padreImg">
                <div className="containerImgLogin"></div>
              </div>

              <div className="containerFormLogin">
                <div>
                  <h1
                    style={{
                      fontSize: "50px",
                    }}
                  >
                    Inicia Sesión
                  </h1>
                </div>
                <div>
                  <TextField
                    type="text"
                    className="Entradas"
                    placeholder="Correo"
                    value={values.user}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="user"
                  />
                </div>
                <div>
                  <TextField
                    type="password"
                    className="Entradas"
                    placeholder="Contraseña"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                  />
                </div>
                <div>
                  <Stack spacing={2} direction="row">
                    <ColorButton variant="contained" type="submit">
                      Ingresar
                    </ColorButton>
                  </Stack>
                </div>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}

