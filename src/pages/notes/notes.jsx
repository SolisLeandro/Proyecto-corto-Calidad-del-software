import React, { useEffect, useState } from "react"
import './notes.css'
import StickyNote from "../../components/stickyNote/stickyNote"
import { Link } from "react-router-dom"
import { getNotes, deleteNote } from '../../helpers/dbController/dbController'

const Notes = () => {
    const [notesData, setNotesData] = useState([]);

    const USER_ID = 1

    const deleteNoteButtonAction = async (noteId) => {
        console.log("deleeeeeeeeeete")
        var resp = await deleteNote(noteId)
        console.log(resp)
        await getNotesDB()
    }

    async function getNotesDB() {
        var resp = await getNotes(USER_ID)
        var data = []
        resp.map((element) => {
            data.push({
                id: element.id,
                title: element.title,
                content: element.body,
                date: element.lastModification
            })
        })
        setNotesData(data)
    }

    useEffect(async () => {
        getNotesDB()
    }, []);

    return (
        <div className="notes-general-div">
            <div className="note-top">
                <div></div>
                <h1 className="notes-title">Tus notas</h1>
                <Link id="createNoteLink" to={{pathname:"/home/createNote", state: { userId:USER_ID}}}>
                    <button id="createNoteButton" className="notes-button">Crear Nota</button>
                </Link>
            </div>
            <div className="notes-scroll-div">
                {notesData.map((element) => {
                    return (
                        <div style={{ margin: "20px 0px", width: "100%" }}>
                            <StickyNote id={element.id} title={element.title} content={element.content} date={element.date} deleteNoteButtonAction={deleteNoteButtonAction} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Notes