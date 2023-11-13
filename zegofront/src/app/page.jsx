import React from "react";
import "../../css/globals.css";
import CardsR from "./Moleculas/CardsR";
import CardsL from "./Moleculas/CardsL";
import Banner from "./Orgnanismos/Banner";
import { Grid } from "@mui/material";

export default function Home() {
  const CardMisionL = [
    {
      tituloCard: "Mision",
      contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
      styleCard: "Card1",
    },
  ];
  const CardVisionR = [
    {
      tituloCard: "Vision",
      contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
      styleCard: "Card1",
    },
  ];

  const CardValoresL = [
    {
      tituloCard: "Valores",
      contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
      styleCard: "Card1",
    },
  ];

  return (
    <>
      <Banner/>
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
    </>
  );
}
