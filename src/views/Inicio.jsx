import React from 'react'
import About from './About/About'
import DirectAccess from './DirectAccess/DirectAccess'
import NavBar from './NavBar/NavBar'
import Proyects from './Proyects/Proyects'
import Welcome from './Welcome/Welcome'




function Inicio() {
    return (
        <div>
            <NavBar/>
            <Welcome/>
            <DirectAccess/>
            <About/>
            <Proyects/>
        </div>
    )
}

export default Inicio
