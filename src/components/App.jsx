import React from "react"
import { BrowserRouter, Switch, Route, Link, HashRouter, Redirect } from "react-router-dom"
import Login from "../pages/login/login.jsx"
import Home from "../pages/home/home.jsx"

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/login" />
                <Route path="/login"> <Login></Login></Route>
                <Route path="/home"> <Home></Home></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App