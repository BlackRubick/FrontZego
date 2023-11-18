"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Enlaces from "../Atomos/Enlaces";
import { Grid } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import { Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <AppBar position="static" style={{ background: "#10754A" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={4}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "15px",
                }}
              >
                <Grid container direction={"column"} spacing={0}>
                  <Grid item><h2 className="contxD"> Contactanos</h2></Grid>

                  <Grid item>
                    <Grid container direction={"row"} spacing={0}>

                      <h2 className="num"><LocalPhoneIcon className="phonexD"></LocalPhoneIcon>      +52   96116681124</h2>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>

            <Grid item xs={12} lg={4}>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <h2 className="titulo" >ZEGO S.A DE C.V</h2>
              </div>
            </Grid>

            <Grid item xs={12} lg={4}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Grid container direction={"column"} spacing={0}>
                  <Grid item>
                    <Grid
                      container
                      direction={"row"}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >

                      <h2 className="footer2xD" ><FacebookIcon></FacebookIcon>Zego Fumigaciones</h2>
                    </Grid>
                  </Grid>

                  <Grid item>
                    <Grid
                      container
                      direction={"row"}
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      
                      <h2 className="footer3xD"><Email  ></Email> ZegoFumigaciones@Gmail.com</h2>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

{
  /* <div
style={{
  backgroundColor: "#313931",
  color: "white",
}}
>
<Grid container spacing={0}>
  <Grid item xs={12} lg={4}>
    <Grid container direction={"column"} spacing={0}>
      <Grid item>
        <h2
          style={{
            fontSize: "30px",
          }}
        >
          Contactanos
        </h2>
      </Grid>

      <Grid item>
        <Grid container direction={"row"} spacing={0}>
          <LocalPhoneIcon
            sx={{
              fontSize: "50px",
            }}
          ></LocalPhoneIcon>

          <h2>+52 96116681124</h2>
        </Grid>
      </Grid>
    </Grid>
  </Grid>

  <Grid item xs={12} lg={4}>
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2>ZEGO S.A DE C.V</h2>
    </div>
  </Grid>

  <Grid item xs={12} lg={4}>
    <Grid container direction={"column"} spacing={0} >
      <Grid item >
        <Grid container direction={"row"} style={{
          display:"flex",
          alignItems:"center"
        }} >
          <FacebookIcon></FacebookIcon>
          <h2>Zego Fumigaciones</h2>
        </Grid>
      </Grid>

      <Grid item>
        <Grid container direction={"row"} style={{
          display:"flex",
          alignItems:"center"
        }}>
          <Email></Email>
          <h2>ZegoFumigaciones@Gmail.com</h2>
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Grid>
</div> */
}
