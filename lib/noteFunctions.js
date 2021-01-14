const fs = require('fs')
const path = require('path')
const uniqid = require('uniqid')

function updateNotes(notesArr) {
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr, null, 2)
    )    
}

function createNewNote(newNote, notesArr) {
    notesArr.push(newNote)
    updateNotes(notesArr)
    return newNote
}

function removeNote(noteIndex, notesArr) {
    const delIndex = notesArr.findIndex(note => note.id === noteIndex)
    notesArr.splice(delIndex, 1)
    updateNotes(notesArr)
}

function checkNote(newNote) {
    if (!newNote.title || typeof newNote.title !== 'string') {
        return false
    }
    if (!newNote.text || typeof newNote.text !== 'string') {
        return false
    }
    return true
}

function createID() {
    return uniqid.time()
}

module.exports = {
    createNewNote,
    removeNote,
    checkNote,
    createID
}