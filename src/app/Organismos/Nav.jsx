"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Enlaces from "../Atomos/Enlaces";
import { Grid } from "@mui/material";

const pages = [
  {
    nombrePage: "Inicio",
    href: "../",
  },
  {
    nombrePage: "Servicios",
    href: "../servicios",
  },
  {
    nombrePage: "Galeria",
    href: "../galeria",
  },
  {
    nombrePage: "Contactanos",
    href: "../contactanos",
  },
  {
    nombrePage: "Clientes",
    href: "../clientes",
  },
  {
    nombrePage: "Reportes",
    href: "../reportes",
  },
  {
    nombrePage: "Descargar",
    href: "../reportesdescarga",
  },
  {
    nombrePage: "Graficas",
    href: "../Graficas",
  },
  
];
const settings = ["Perfil", "Cerrar sesión,"];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleNav = async () => {
    window.location.href = "./agregarCliente";
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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

            <Grid item xs={12} lg={10}>
              <Grid Container spacing={2} className="nav">
                {pages.map((page) => (
                  <Enlaces {...page} />
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12} lg={1}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                  marginBottom: "15px",
                }}
              >
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Open settings">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                      <Avatar
                        alt="Remy Sharp"
                        src="/static/images/avatar/2.jpg"
                      />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    <MenuItem
                      // key={setting}
                      onClick={handleCloseUserMenu}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems:"flex-start"
                        }}
                      >
                        <Button
                          variant="body2"
                          style={{
                            color: "red",
                          }}
                          onClick={handleNav}
                        >
                          Cerrar Sesion
                        </Button>
                        <Button variant="body2" onClick={handleNav}>
                          Agregar Empleado
                        </Button>
                        <Button variant="body2" onClick={handleNav}>
                          Eliminar Empleado
                        </Button>
                        <Button variant="body2" onClick={handleNav}>
                          Editar Empleado
                        </Button>
                      </div>
                    </MenuItem>
                  </Menu>
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
