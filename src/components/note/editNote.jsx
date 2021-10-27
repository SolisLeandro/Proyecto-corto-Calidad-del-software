import React from "react"
import "./editNote.css"

const EditNote = (props) => {
    const { id,title,content,date,updateNoteButtonAction,cancelNoteButtonAction} = props

    return (
        <div className="note-general-div">
            <div className="note-top">
                <input className="note-title" value={title}></input>
                <input className="note-date" value={date}></input>
                <button onClick={updateNoteButtonAction}>Guardar</button>
                <button onClick={cancelNoteButtonAction}>Cancelar</button>
            </div>
            <textarea className="note-text" value={content}></textarea>
        </div>
    )
}

export default EditNote