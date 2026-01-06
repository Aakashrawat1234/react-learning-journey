import React from "react";
import "./App.css";

function Box({name="Aakash ",profession="Web Developer",age=21}){
  
    return(
        <>
        <div className="box">
            <h1>{name}</h1>
            <h2>{profession}</h2>
            <h2>{age}</h2>
          
            </div></>
    )
}
export default Box;