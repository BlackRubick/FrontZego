"use client";
import React from "react";
import { Grid } from "@mui/material";
import { Box } from "@mui/material/Box";

import "../../../css/globals.css";

export default function CardsL({ aux }) {
  return (
    <>
      <Grid item xs={12}>
        <Grid container spacing={0}>
          {aux.map((card) => (
            <>
              <Grid item xs={12} lg={6}>
                <div className="contenidoCardNoImg">
                  <div className="contCardNo">
                    <h3>{card.contenidoCard}</h3>
                  </div>
                </div>
              </Grid>

              <Grid item xs={12} lg={6}>
                <div className={card.styleCard}>
                  <div className="contenidoCard">
                    <h1>{card.tituloCard}</h1>
                  </div>
                </div>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </>
  );
}

{
  /* <Grid item xs={12}>
        <Grid container spacing={0}>
          {aux.map((card) => (
            <>
              <Grid item xs={12} lg={6}>
                <div>
                  <img src={card.imgCardUrl}></img>
                  <h1>{card.tituloCard}</h1>
                </div>
              </Grid>
              <Grid item xs={12} lg={6}>
                <h1>hola 303556</h1>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid> */
}
