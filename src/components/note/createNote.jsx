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
            <div className="note-top">
                <input onChange={(value)=>setTitle(value.target.value)} className="note-title" value={title}></input>
                <Link to={{ pathname: "/home/notes" }} onClick={()=>createNoteButtonAction(userId,title,content)} className="noLinkStyle" >
                    <button>Guardar</button>
                </Link>
                <Link to={{ pathname: "/home/notes" }} className="noLinkStyle" >
                    <button>Cancelar</button>
                </Link>
            </div>
            <textarea onChange={(value)=>setContent(value.target.value)} className="note-text" value={content}></textarea>
        </div>
    )
}

export default CreateNote