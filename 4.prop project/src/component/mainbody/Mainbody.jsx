import React from "react";
import "./mainbody.css"
import Card from "../cards/card";
import Bmw from "../../assets/bmw.jpg";
import Lambo from "../../assets/lambo.jpg";
import Ferari from "../../assets/ferari.jpg";

function Mainbody(){
    return(<>
    <div className="hero">
     <Card name="BMW" price="Rs 1.9cr" imageURl={Bmw}/>
     <Card name="Lambo" price="Rs 2cr" imageURl={Lambo}/>
     <Card name="Ferari" price="Rs 3cr" imageURl={Ferari}/>
     
     
    </div>
    </>)
}

export default Mainbody;