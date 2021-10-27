import React from "react"
import { BrowserRouter, Switch, Route, Link, HashRouter, Redirect } from "react-router-dom"
import Topbar from "../../components/topbar/topbar"
import Notes from "../notes/notes"
import Note from "../note/note"
import Profile from "../profile/profile"

const Home = () => {
    return (
        <BrowserRouter>
            <Topbar/>
            <Switch>
                <Redirect exact from="/home" to="/home/notes" />
                <Route path="/home/notes"> <Notes></Notes></Route>
                <Route path="/home/note"> <Note></Note></Route>
                <Route path="/home/profile"> <Profile></Profile></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Home