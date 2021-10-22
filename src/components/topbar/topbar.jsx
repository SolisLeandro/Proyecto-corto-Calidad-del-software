import React from "react"
import {Link} from "react-router-dom"
import "./topbar.css"

const Topbar = () => {
    return (
        <div className="topbar-general-div">
            <h1 className="topbar-title">Simple Notes</h1>
            <div className="topbar-buttons-div">
                <Link to="/home/notes"><button type="button" className="topbar-button">Inicio</button></Link>
                <Link to="home/profile"><button type="button" className="topbar-button">Perfil</button></Link>
            </div>
            <h1 className="topbar-logOut">Cerrar Sesión</h1>
        </div>
    )
}

export default Topbar