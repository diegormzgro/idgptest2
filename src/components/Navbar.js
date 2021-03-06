import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import "../styles/navbar.css"
import logo from '../assets/idgp-logo.jpg'
import {FaBars, FaTimes, FaWindowClose} from 'react-icons/fa';


function Navbar() {

    const [cliked, setcliked] = useState(false);
   
    return (
        <>
        <Logo/>
        <nav className="navbar1">

            <div className="menu-icon" onClick={()=>setcliked(!cliked)}>
                {
                    cliked ? <FaWindowClose size="1.5em"/> :<FaBars size="1.5em"/>

                }
            </div>
            
            <ul className={cliked ? "mobile-links": "links"} onClick={()=>{setcliked(false)}}>
                <Link to="/">Inicio</Link>
                <Link to="/mision" >Nosotros</Link>
                <Link to="/cursos" >Cursos y Talleres</Link> 
                <Link to="/servicios" >Servicios</Link>
                
                <Link to="/contacto" >Contacto</Link>
            </ul>
        </nav>
        </>

        
    )
}

function Logo() {
    return(
        <div className="logo">
            <img src={logo}  alt="Logo" width="400" height="200" />
        </div>
    )
}

export default Navbar;
