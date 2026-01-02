import { useEffect, useState } from 'react'

import './App.css'

function App() {
  let [count,setcount]=useState(0);
  let [count2,Setcount2]=useState(0)
  useEffect(()=>{
 
    console.log("count2 render");
  },[count])

  return (
    <>
     <h1>{count}</h1>
     <h1>{count2}</h1>
     <button onClick={
      ()=>{
        setcount(++count)
      }
     }>count</button>
     <button onClick={
      ()=>{
        Setcount2(++count2)
      }
     }>count2</button>
      
    </>
  )
}

export default App
