"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import AdbIcon from "@mui/icons-material/Adb";
import Button from '@mui/material/Button';
import Enlaces from "../Atomos/Enlaces";
import { useRouter } from 'next/navigation'; // Importa useRouter de Next.js

const pages = {
  admin: [
    { nombrePage: "Inicio", href: "../" },
    { nombrePage: "Clientes", href: "../clientes" },
    { nombrePage: "Reportes", href: "../reportes" },
    { nombrePage: "Descargar", href: "../reportesdescarga" },
    { nombrePage: "Graficas", href: "../graficas" },
    { nombrePage: "Agregar Empleado", href: "../agregarEmpleado" },
    { nombrePage: "Editar Empleado", href: "../agregarEmpleado" },


  ],
  supervisor: [
    { nombrePage: "Inicio", href: "../" },
    { nombrePage: "Galeria", href: "../galeria" },
    { nombrePage: "Servicios", href: "../servicios" },
    { nombrePage: "Contactanos", href: "../contactanos" },
    { nombrePage: "Reportes", href: "../reportes" },
    { nombrePage: "Descargar", href: "../reportesdescarga" },
  ],
  cliente: [
    { nombrePage: "Inicio", href: "../" },
    { nombrePage: "Galeria", href: "../galeria" },
    { nombrePage: "Servicios", href: "../servicios" },
    { nombrePage: "Contactanos", href: "../contactanos" },
  ],
  default: [
    { nombrePage: "Inicio", href: "../" },
    { nombrePage: "Galeria", href: "../galeria" },
    { nombrePage: "Servicios", href: "../servicios" },
    { nombrePage: "Contactanos", href: "../contactanos" },
    { nombrePage: "Iniciar Sesion", href: "../Login" },
  ]
};

function Nav() {
  const [userRole, setUserRole] = React.useState(localStorage.getItem('userRole'));
  const [userName, setUserName] = React.useState(localStorage.getItem('userName')); // Estado para el nombre del usuario
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!userRole);
  const router = useRouter();

  React.useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    const storedName = localStorage.getItem('userName');
    if (storedRole) {
      setUserRole(storedRole);
      setUserName(storedName); // Establecer el nombre del usuario
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userName'); // Eliminar el nombre del usuario del localStorage
    setUserRole(null);
    setUserName(null); // Limpiar el estado del nombre del usuario
    setIsAuthenticated(false);
    router.push('/Login');
  };

  const navPages = isAuthenticated ? pages[userRole] || pages.default : pages.default;

  return (
    <AppBar position="static" style={{ background: "#10754A" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={1}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <AdbIcon sx={{ display: { md: "flex" }, mr: 1 }} />
                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontFamily: "monospace",
                    fontWeight: 700,
                    letterSpacing: ".3rem",
                    color: "inherit",
                    textDecoration: "none",
                    display: "flex",
                  }}
                >
                  ZEGO
                </Typography>
              </div>
            </Grid>

            <Grid item xs={12} lg={8}>
              <Grid container spacing={2} className="nav">
                {navPages.map((page) => (
                  <Enlaces key={page.nombrePage} {...page} />
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} lg={3}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                {isAuthenticated && (
                  <Typography variant="body1" style={{ marginRight: '10px' }}>
                    {userName}
                  </Typography>
                )}
                {isAuthenticated && (
                  <Button color="inherit" onClick={handleLogout}>
                    Cerrar Sesión
                  </Button>
                )}
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                  </Tooltip>
                </Box>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Nav;
