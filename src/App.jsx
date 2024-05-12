import React from 'react'
import Navbar from './components/Navbar'
import Home from "./components/Home"
import Sectors from './components/Sectors'
import Portfolio from './components/Portfolio'
import Wealth from './components/Wealth'
import Footer from './components/Footer'
import Contact from './components/Contact'

import {Toaster} from "react-hot-toast"


function App() {
  return (
    <>
    <div>
    <Navbar/ >
    <Home/>
    <Sectors/>
    <Portfolio/>
    <Wealth />
    <Contact />
    <Footer/>
    </div>
    <Toaster />
    </>
    
  )
}

export default App

