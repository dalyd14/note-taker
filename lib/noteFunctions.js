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

module.exports = {
    createNewNote
}