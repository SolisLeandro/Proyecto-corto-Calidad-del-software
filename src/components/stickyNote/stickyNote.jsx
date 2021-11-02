import React from "react"
import { Link } from "react-router-dom"
import "./stickyNote.css"
import { FaTrash } from 'react-icons/fa';

const StickyNote = (props) => {
    const { id, title, content, date, deleteNoteButtonAction } = props
    const maxContentLength = 80;

    return (
        <div style={{display:"flex"}}>
            <Link id={id+"-Link"} to={{ pathname: "/home/note", state: { id, title, content, date } }} style={{ width: "100%" }} className="noLinkStyle" >
                <div id={id} className="stickyNote-general-div">
                    <h1 id={id+"-title"} className="stickyNote-title">{title}</h1>
                    <h1 id={id+"-content"} className="stickyNote-text" style={{ marginLeft: "15px" }}>{content.length > maxContentLength ? content.substring(0, maxContentLength) + "..." : content}</h1>
                    <h1 id={id+"-date"} className="stickyNote-text">{date}</h1>
                </div>
            </Link>
            <button id={id+"-deleteButton"} className="stickyNote-deleteButton" onClick={() => deleteNoteButtonAction(id)}><FaTrash style={{fontSize:"20px"}} /></button>
        </div>
    )
}

export default StickyNote