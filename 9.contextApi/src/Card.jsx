import React, { useContext } from "react"
import { HindiKahani } from "./context/story"
function Card(){
   let obj= useContext(HindiKahani);
   console.log(obj)

   return(
    <>
<h1>paras ke kahani bhot duk dyak ha jo ke {obj.storyline} </h1>
    </>
   )
}
export default Card