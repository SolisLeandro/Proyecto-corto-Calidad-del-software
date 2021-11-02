import React, {useState} from "react"
import { Link } from "react-router-dom"
import { createNote } from '../../helpers/dbController/dbController'
import { useLocation } from "react-router-dom"
import "./createNote.css"

const CreateNote = () => {
    const location = useLocation()
    const userId = location.state.userId
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    async function createNoteButtonAction(userId,title,content){
        await createNote(userId,title,content)
    }

    return (
        <div className="note-general-div">
            <h1 className="note-title">Crear nota</h1> 
            <div className="note-top">
                <input id="note-input-title" className="note-input" onChange={(value)=>setTitle(value.target.value)} value={title}></input>
                <Link to={{ pathname: "/home/notes" }} onClick={()=>createNoteButtonAction(userId,title,content)} className="noLinkStyle" >
                    <button id="note-save-button" className="note-edit-button">Guardar</button>
                </Link>
                <Link to={{ pathname: "/home/notes" }} className="noLinkStyle" >
                    <button id="note-cancel-button" className="note-edit-button">Cancelar</button>
                </Link>
            </div>
            <textarea id="note-textarea-content" className="note-textArea" onChange={(value)=>setContent(value.target.value)} value={content}></textarea>
        </div>
    )
}

export default CreateNote