

import { useContext } from 'react'
import './App.css'
import UserContext, { data } from './context/UserContext'
import Card from './Card';

function App() {
 
let name=useContext(data);
console.log(name)
  return (
    <>

   <Card/>
      <h1> Hi I am {name} </h1>
      
    </>
  )
}

export default App
