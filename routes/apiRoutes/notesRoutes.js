const notes = require('../../db/db.json')
const { createNewNote, checkNote } = require('../../lib/noteFunctions')
const router = require('express').Router()


router.get('/notes', (req, res) => {
    const notesDB = notes

    res.json(notesDB)
})

router.post('/notes', (req, res) => {
    const notesDB = notes
    req.body.id = notesDB.length + 1
    const newNote = req.body

    if (checkNote(newNote)) {
        res.json(createNewNote(newNote, notesDB))
    } else {
        res.status(400).send('This animal was not properly formatted.')
    }
})

router.delete('/notes', (req, res) => {
    
})

module.exports = router