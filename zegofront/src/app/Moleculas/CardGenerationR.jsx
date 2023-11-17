import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import CardsR from "./CardsR";
import CardsR from "./CardsR";

import { Grid } from "@mui/material";

export default function CardGeneration() {
  const CardL = [
    {
      tituloCard: "Mision",
        contenidoCard:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut maximus blandit nisi id consequat. Etiam est libero, aliquam quis molestie id, vehicula quis justo. In sit amet massa non lorem facilisis egestas.",
        styleCard:"Card1"
    },
    
  ];
  
  return (
    <>
      <CardsR aux={CardL} />
    </>
  );
}
