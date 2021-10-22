import React from "react";
import "./login.css"

const Login = () => {
    return (
        <div className="login-general-div">
            <div className="login-form-div">
                <div className="login-form-topDiv">
                    <h1 className="login-form-title">Simple Notes</h1>
                    <h1 className="login-form-text">Ingrese con sus credenciales:</h1>
                </div>
                <h1 className="login-form-h1">Usuario</h1>
                <input type="text" className="login-form-input"></input>
                <h1 className="login-form-h1">Contraseña</h1>
                <input type="password" className="login-form-input"></input>
                <button className="login-form-button">Iniciar sesión</button>
            </div>
        </div>
    )
}

export default Login

