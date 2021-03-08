import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import DirectAccess from './DirectAccess/DirectAccess'
import NavBar from './NavBar/NavBar'
import Proyects from './Proyects/Proyects'
import Skills from './Skills/Skills'
import Welcome from './Welcome/Welcome'


function Inicio() {
    return (
        <div>
            <NavBar/>
            <Welcome/>
            <DirectAccess/>
            <About/>
            <Proyects/>
            <Skills/>
            <Contact/>
        </div>
    )
}

export default Inicio
