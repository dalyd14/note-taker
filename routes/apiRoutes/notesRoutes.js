const notes = require('../../db/db.json')
const { createNewNote } = require('../../lib/noteFunctions')
const router = require('express').Router()


router.get('/notes', (req, res) => {
    const notesDB = notes

    res.json(notesDB)
})

router.post('/notes', (req, res) => {
    const notesDB = notes
    req.body.id = notesDB.length

    createNewNote(req.body, notesDB)
})

router.delete('/notes', (req, res) => {
    
})

module.exports = router