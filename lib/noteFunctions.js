const fs = require('fs')
const path = require('path')

function createNewNote(newNote, notesArr) {
    notesArr.push(newNote)
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notesArr, null, 2)
    )

    return newNote
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

module.exports = {
    createNewNote,
    checkNote
}