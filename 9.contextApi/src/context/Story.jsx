import React, { createContext } from "react";

export const HindiKahani=createContext();
function Story({children}){
    let kahani={
        name:"paras roya",
        storyline:"pars ko mana mara to wo bhot roya",

    }
    return(<>

    <HindiKahani.Provider value={kahani}>

    {children}
    </HindiKahani.Provider>
    </>)
}

export default Story;