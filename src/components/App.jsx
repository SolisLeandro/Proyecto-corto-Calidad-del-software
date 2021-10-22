import React from "react"
import { BrowserRouter, Switch, Route, Link, HashRouter, Redirect } from "react-router-dom"
import Login from "../pages/login/login.jsx"

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/login" />
                <Route path="/login"> <Login></Login></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App