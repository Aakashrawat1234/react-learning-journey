
import './App.css'
import { useState } from 'react';

function App(){
 let [count,setcount]=useState(0);
  return(
    <>
    <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)}>increment</button>
  




    </>
  )
}

export default App
