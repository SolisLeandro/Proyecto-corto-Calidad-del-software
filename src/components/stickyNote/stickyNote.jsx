import React from "react"
import { Link } from "react-router-dom"
import "./stickyNote.css"

const StickyNote = (props) => {
    const { id, title, content, date, deleteNoteButtonAction } = props
    const maxContentLength = 80;

    return (
        <div>
            <Link to={{ pathname: "/home/note", state: { id, title, content, date } }} style={{ width: "100%" }} className="noLinkStyle" >
                <div className="stickyNote-general-div">
                    <h1 className="stickyNote-title">{title}</h1>
                    <h1 className="stickyNote-text" style={{ marginLeft: "15px" }}>{content.length > maxContentLength ? content.substring(0, maxContentLength) + "..." : content}</h1>
                    <h1 className="stickyNote-text">{date}</h1>
                </div>
            </Link>
            <button onClick={() => deleteNoteButtonAction(id)}>Eliminar</button>
        </div>
    )
}

export default StickyNote