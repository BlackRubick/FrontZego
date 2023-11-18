import React from "react";
import "../../../css/globals.css";
import Cardinf from "../Moleculas/Cardinf";



export default function Dreportes() {
return (

<>
<div className="bgreportes" >

<div className="bgreportes2" >  
<div className="namesc" ><h1>Coca Cola </h1></div>

<div ><Cardinf aux={Cardinf} /><div className="flecha"></div></div>
<div className="cardrepo"><Cardinf aux={Cardinf} /><div className="flecha"></div></div>
<div className="cardrepo2"><Cardinf aux={Cardinf} /><div className="flecha"></div></div>
<div className="cardrepo3"><Cardinf aux={Cardinf} /><div className="flecha"></div></div>
<div className="cardrepo4"><Cardinf aux={Cardinf} /><div className="flecha"></div></div>
<div className="cardrepo5"><Cardinf aux={Cardinf} /><div className="flecha"></div></div>
</div>
</div>
</>
)
}