import React from "react";
import Banner from "../Orgnanismos/Banner";
import CardsL from "../Moleculas/CardsL";
import CardsR from "../Moleculas/CardsR";
import { Grid } from "@mui/material";
import "../../../css/globals.css";

export default function Servicios() {
  const CardMisionL = [
    {
      tituloCard: "Fumigacion",
      contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
      styleCard: "Card1",
    },
  ];
  const CardVisionR = [
    {
      tituloCard: "Vigilancia",
      contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
      styleCard: "Card1",
    },
  ];

  const CardValoresL = [
    {
      tituloCard: "Seguridad Privada",
      contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
      styleCard: "Card1",
    },
  ];

  return (
    <>
      <Banner />

      <div className="serviciosFirst">
        <h1 className="servicios2">Servicios </h1>
      </div>

      <Grid
        container
        spacing={0}
        style={{
          marginBottom: "40px",
        }}
      >
        <div className="CardsContainer">
          <div>
            <CardsR aux={CardMisionL} />
          </div>
          <div>
            <CardsL aux={CardVisionR} />
          </div>
          <div>
            <CardsR aux={CardValoresL} />
          </div>
        </div>
      </Grid>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "75%",
            justifyContent: "center",
            backgroundColor: "#D6D6D6",
        
            borderRadius: "2px",
          }}
        >
          <Grid container spacing={2} direction={"row"} style={{
            margin:"20px"
          }}>
           
              <Grid item xs={12} lg={4}>
                <div className="servicio1">
                  <img
                    src="../.../public/WhatsApp\ Image\ 2023-11-12\ at\ 10.50.28\ PM.jpeg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={4}>
                <div className="servicio1">
                  <img
                    src="../.../public/WhatsApp\ Image\ 2023-11-12\ at\ 10.50.28\ PM.jpeg"
                    alt=""
                  />
                </div>
              </Grid>
              <Grid item xs={12} lg={4}>
                <div className="servicio1">
                  <img
                    src="../.../public/WhatsApp\ Image\ 2023-11-12\ at\ 10.50.28\ PM.jpeg"
                    alt=""
                  />
                </div>
              </Grid>
            
          </Grid>
        </div>
      </div>
    </>
  );
}
