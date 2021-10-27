import React from "react"
import "./showNote.css"

const ShowNote = (props) => {
    const { id,title,content,date,editNoteButtonAction} = props

    return (
        <div className="note-general-div">
            <div className="note-top">
                <h1 className="note-title">{title}</h1>
                <h1 className="note-date">{date}</h1>
                <button onClick={editNoteButtonAction}>Editar</button>
            </div>
            <h1 className="note-text">{content}</h1>
        </div>
    )
}

export default ShowNote