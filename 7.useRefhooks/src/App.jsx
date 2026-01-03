import { useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
let inputvalue=useRef("");
console.log(inputvalue);

  return (
    <>

    <input type="text" ref={inputvalue} value="Aakash Rawat" />
  
    </>
  )
}

export default App
