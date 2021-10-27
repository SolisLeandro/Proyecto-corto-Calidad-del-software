import React, {useState} from "react"
import { useLocation } from "react-router-dom"
import ShowNote from '../../components/note/showNote'
import EditNote from '../../components/note/editNote'
import "./note.css"

const Note = () => {
    const location = useLocation()
    const { id,title,content,date} = location.state
    const [mode, setMode] = useState("SHOW")

    const editNoteButtonAction = ()=>{
        setMode("EDIT")
    }

    const updateNoteButtonAction = ()=>{
        //actualizar info base de datos
        //obtener datos nuevamente
        setMode("SHOW")
    }

    const cancelNoteButtonAction = ()=>{
        setMode("SHOW")
    }


    return (
        mode=="SHOW" ? 
        (
            <ShowNote id={id} title={title} content={content} date={date} editNoteButtonAction={editNoteButtonAction} />
        ) :
        (
            <EditNote id={id} title={title} content={content} date={date} updateNoteButtonAction={updateNoteButtonAction} cancelNoteButtonAction={cancelNoteButtonAction} />
        )
    )
}

export default Note