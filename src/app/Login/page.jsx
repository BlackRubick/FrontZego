"use client";
import { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Importa useRouter de Next.js
import { TextField, Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { Formik } from "formik";

export default function Login() {
  const baseUrl = "http://127.0.0.1:5000/login";
  const router = useRouter(); // Utiliza el hook useRouter

  const loginUser = async (values) => {
    try {
      const response = await axios.post(baseUrl, {
        correo: values.user,
        contraseña: values.password,
      });
  
      const mensaje = response.data.mensaje;

      if (mensaje === "Inicio de sesión exitoso") {
        router.push("/agregarCliente"); // Redirige a la ruta agregarCliente
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
                  <Button variant="contained" type="submit">
                    Ingresar
                  </Button>
                </Stack>
              </div>
            </div>
          </div>
        </form>
      )}
    </Formik>
  );
}
