"use client";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // Importa useRouter de Next.js
import { TextField, Button, Grid, styled } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Formik } from "formik";
import { Padding } from "@mui/icons-material";

export default function Login() {
  const baseUrl = "http://127.0.0.1:5000/login";
  const router = useRouter(); // Utiliza el hook useRouter
  const ColorButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: "#10754a",
    "&:hover": {
        color:"black",
        backgroundColor: "#D6D6D6",
    },
  }));


  const loginUser = async (values) => {
    try {
      const response = await axios.post(baseUrl, {
        correo: values.user,
        contraseña: values.password,
      });

      const mensaje = response.data.mensaje;
      const rol = response.data.rol;
      const nombre = response.data.nombre; // Obtener el nombre del usuario del response

      if (mensaje === "Inicio de sesión exitoso") {
        localStorage.setItem("userRole", rol);
        localStorage.setItem("userName", nombre); // Guardar el nombre del usuario en localStorage
        router.push("/"); // Redirigir al Home después del inicio de sesión
      } else {
        alert("Correo o contraseña incorrectos");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Formik
      initialValues={{
        user: "",
        password: "",
      }}
      onSubmit={async (values) => {
        await loginUser(values);
      }}
    >
      {({ handleBlur, handleChange, handleSubmit, values }) => (
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
                    fontSize: "40px",
                  }}
                >
                  Inicia Sesión
                </h1>
              </div>
              <Grid container direction={"row"} spacing={6}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    className="Entradas"
                    placeholder="Correo"
                    value={values.user}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="user"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="password"
                    className="Entradas"
                    placeholder="Contraseña"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="password"
                  />
                </Grid>
              </Grid>

              <div
                style={{
                  margin: "20px",
                }}
              >
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
  );
}
