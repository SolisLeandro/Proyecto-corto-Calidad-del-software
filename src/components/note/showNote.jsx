import React from "react"
import "./showNote.css"

const ShowNote = (props) => {
    const { id,title,content,date,editNoteButtonAction} = props

    return (
        <div className="note-general-div">
            <div className="note-top">
                <h1 id="note-title" className="note-title">{title}</h1>
                <h1 id="note-date" className="note-date">{date}</h1>
                <button id="note-date-show-button" className="note-show-button" onClick={editNoteButtonAction}>Editar</button>
            </div>
            <h1 id="note-content" className="note-text">{content}</h1>
        </div>
    )
}

export default ShowNote