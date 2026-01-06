import React, { createContext } from "react"

export const data=createContext();

function UserContext({children}){

   

    let username="Aakash Rawat"
    return(<>
    <data.Provider value={username}>
    {children}
    </data.Provider>
    </>)
}

export default UserContext