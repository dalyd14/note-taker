const notes = require('../../db/db.json')
const { createNewNote,removeNote, checkNote, createID } = require('../../lib/noteFunctions')
const router = require('express').Router()


router.get('/notes', (req, res) => {
    const notesDB = notes
    res.json(notesDB)
})

router.post('/notes', (req, res) => {
    const notesDB = notes
    req.body.id = createID()
    const newNote = req.body

    if (checkNote(newNote)) {
        res.json(createNewNote(newNote, notesDB))
    } else {
        res.status(400).send('This animal was not properly formatted.')
    }
})

router.delete('/notes/:id', (req, res) => {
    const noteID = parseInt(req.params.id)
    const notesDB = notes
    removeNote(noteID, notesDB)
    res.send("The note was deleted.")
})

module.exports = router