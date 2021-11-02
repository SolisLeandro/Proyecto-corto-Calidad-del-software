import axios from 'axios';


const PATH = 'http://localhost:4000/'

export async function getNotes(userID) {
    return await axios.get(PATH + 'getNotes/' + userID).then(resp => {
        return resp.data
    })
}

export async function deleteNote(noteId) {
    return await axios.delete(PATH + 'deleteNote/' + noteId).then(resp => {
        return resp.data
    })
}

export async function updateNote(noteId, title, content) {
    return await axios.post(PATH + 'updateNote/' + noteId + "&" + title + "&" + content).then(resp => {
        return resp.data
    })
}

export async function createNote(noteId, title, content) {
    return await axios.post(PATH + 'createNote/' + noteId + "&" + title + "&" + content).then(resp => {
        return resp.data
    })
}