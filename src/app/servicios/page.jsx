import React from "react";
import Banner from "../Orgnanismos/Banner";
import Cards from "../Moleculas/Cards";
import { Grid } from "@mui/material";

export default function Servicios() {
  const CardsA = [
    {
      tituloCard: "Fumigaciones",
      contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
      styleCard: "Card1",
      orderStyle1:"orderStyleL1",
      orderStyle2:"orderStyleL2"
    },
   {
      tituloCard: "Control De Plagas",
      contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
      styleCard: "Card1",
      orderStyle1:"orderStyleR1",
      orderStyle2:"orderStyleR2"
    },
    
  ];

  const CardsB = [
    {
      tituloCard: "Productos y Personal de Limpieza",
      contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
      styleCard: "Card1",
      orderStyle1:"orderStyleR1",
      orderStyle2:"orderStyleR2"
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
          <Cards aux={CardsA} />
          <Cards aux={CardsB} />

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
            boxShadow: "-5px 6px 32px -3px rgba(0, 0, 0, 0.2)",
            borderColor: "#65717d",
            borderRadius: "2px",
          }}
        >
          <Grid
            container
            spacing={2}
            direction={"row"}
            style={{
              margin: "20px",
            }}
          >
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
