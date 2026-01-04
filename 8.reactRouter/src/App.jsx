
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import {Outlet} from 'react-router-dom';
import React from 'react'

function App() {
  

  return (
    <>
   <Nav/>
   <Outlet/>
<Footer/>       
    </>
  )
}

export default App
