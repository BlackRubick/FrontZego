"use client";
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

  return (
    <>
      <Formik
        initialValues={{
          user: "",
          password: "",
        }}
        onSubmit={async (values) => {
          try {
            axios
              .post(baseUrl, {
                email: values.user,
                password: values.password,
              })
              .then((response) => {
                const token = response.data.accessToken;

                if (response.data != "") {
                  Cookies.set("token", token);
                  window.location.href = "http://localhost:3000/";
                } else {
                  console.log("Usuario o Contraseña incorrecta");
                }
              });
          } catch (error) {
            console.error(err);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, values }) => (
          <form
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
                  <h1
                    style={{
                      fontSize: "50px",
                    }}
                  >
                    Inicia Sesion
                  </h1>
                </div>
                <div>
                  <input type="text" className="Entradas" placeholder="Correo" value={values.user} />
                </div>
                <div>
                  <input type="text" className="Entradas" placeholder="Contraseña" value={values.password} />
                </div>
                <div>
                  <Stack spacing={2} direction="row">
                    <ColorButton variant="contained" type="submit">Ingresar</ColorButton>
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