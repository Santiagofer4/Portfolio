import React from 'react'
import About from './sections/About'
import DirectAccess from './sections/DirectAccess'
import NavBar from './sections/NavBar'
import Welcome from './sections/Welcome'




function Inicio() {
    return (
        <div>
            <NavBar/>
            <Welcome/>
            <DirectAccess/>
            <About/>
        </div>
    )
}

export default Inicio
