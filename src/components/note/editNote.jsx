import React, {useState} from "react"
import "./editNote.css"

const EditNote = (props) => {
    const { id,date,updateNoteButtonAction,cancelNoteButtonAction} = props
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);

    return (
        <div className="note-general-div">
            <div className="note-top">
                <input id="note-input-title" className="note-input" onChange={(value)=>setTitle(value.target.value)}  value={title}></input>
                <h1 id="note-date" className="note-date">{date}</h1>                
                <button id="note-save-button" className="note-edit-button" onClick={()=>updateNoteButtonAction(id,title,content)}>Guardar</button>
                <button id="note-cancel-button" className="note-edit-button" onClick={cancelNoteButtonAction}>Cancelar</button>
            </div>
            <textarea id="note-textarea-content" className="note-textArea" onChange={(value)=>setContent(value.target.value)} value={content}></textarea>
        </div>
    )
}

export default EditNote