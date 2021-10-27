import React from "react"
import { useLocation } from "react-router-dom"
import "./note.css"

const Note = () => {
    const location = useLocation()
    const { id,title,content,date} = location.state

    return (
        <div className="note-general-div">
            <div className="note-top">
                <h1 className="note-title">{title}</h1>
                <h1 className="note-title">{date}</h1>
            </div>
            
            <h1 className="note-text">{content}</h1>
            
        </div>
    )
}

export default Note