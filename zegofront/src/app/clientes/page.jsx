import React from "react";
import "../../../css/globals.css";
import Cardclient from "../Moleculas/CardClient";

export default function Clientes() {
  return (
    <>
    <div className="BgClient" >
    <div className="BgClient2">
    <div className="DivClients">
    <h1>Clientes </h1>
    <Cardclient aux={Cardclient} />
    </div>
    <div className="card2" ><Cardclient aux={Cardclient} /></div>
    <div className="card3" ><Cardclient aux={Cardclient} /></div>
    <div className="card4" ><Cardclient aux={Cardclient} /></div>
    <div className="card5" ><Cardclient aux={Cardclient} /></div>
    <div className="card6" ><Cardclient aux={Cardclient} /></div>
    <div className="card7" ><Cardclient aux={Cardclient} /></div>
    <div className="card8" ><Cardclient aux={Cardclient} /></div>
    <div className="card9" ><Cardclient aux={Cardclient} /></div>
    </div>
    </div>
    </>
  );
}
