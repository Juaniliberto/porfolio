import { useState } from 'react'
import './styles/App.css'
import Navbar from './pages/Navbar.jsx'
import Inicio from './pages/Inicio.jsx'
import SobreMi from './pages/sobre-mi.jsx'
import Proyectos from './pages/Proyectos.jsx'
import Contacto from './pages/Contacto.jsx'

function App() {
  return (
    <>
      <div className="fondo-azul"></div> {/* Fondo con clip-path y sombra */}
      <Navbar />
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Contacto/>
    </>
  )
}

export default App
