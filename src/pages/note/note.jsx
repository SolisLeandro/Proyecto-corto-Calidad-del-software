import React, { useState } from "react"
import { useLocation } from "react-router-dom"
import ShowNote from '../../components/note/showNote'
import EditNote from '../../components/note/editNote'
import { updateNote, deleteNote } from '../../helpers/dbController/dbController'
import "./note.css"

const Note = () => {
    const location = useLocation()
    const [id, setId] = useState(location.state.id);
    const [title, setTitle] = useState(location.state.title);
    const [content, setContent] = useState(location.state.content);
    const [date, setDate] = useState(location.state.date);

    const [mode, setMode] = useState("SHOW")

    const editNoteButtonAction = () => {
        setMode("EDIT")
    }

    const updateNoteButtonAction = async (noteId, title, content) => {
        var resp = await updateNote(noteId,title, content)
        console.log("update: ",resp)
        setTitle(title)
        setContent(content)
        setDate(resp.lastModification)
        setMode("SHOW")
    }

    const cancelNoteButtonAction = () => {
        setMode("SHOW")
    }


    return (
        mode == "SHOW" ?
            (
                <ShowNote id={id} title={title} content={content} date={date} editNoteButtonAction={editNoteButtonAction} />
            ) :
            (
                <EditNote id={id} title={title} content={content} date={date} updateNoteButtonAction={updateNoteButtonAction} cancelNoteButtonAction={cancelNoteButtonAction} />
            )
    )
}

export default Note