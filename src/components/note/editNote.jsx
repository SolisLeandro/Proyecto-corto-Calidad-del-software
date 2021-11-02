import React, {useState} from "react"
import "./editNote.css"

const EditNote = (props) => {
    const { id,date,updateNoteButtonAction,cancelNoteButtonAction} = props
    const [title, setTitle] = useState(props.title);
    const [content, setContent] = useState(props.content);

    return (
        <div className="note-general-div">
            <div className="note-top">
                <input onChange={(value)=>setTitle(value.target.value)} className="note-title" value={title}></input>
                <h1 className="note-date">{date}</h1>                
                <button onClick={()=>updateNoteButtonAction(id,title,content)}>Guardar</button>
                <button onClick={cancelNoteButtonAction}>Cancelar</button>
            </div>
            <textarea onChange={(value)=>setContent(value.target.value)} className="note-text" value={content}></textarea>
        </div>
    )
}

export default EditNote