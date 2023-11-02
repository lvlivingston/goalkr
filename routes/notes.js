const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /notes (see "All Notes" page)
router.get('/', ensureLoggedIn, notesCtrl.indexNote);

// GET /notes/new (see "Add a Note" page)
router.get('/new', ensureLoggedIn, notesCtrl.addNewNotePage);

// GET /notes/new/:okrId (see "Add a Note" page view on specific OKR)
router.get('/new/:id', ensureLoggedIn, notesCtrl.addNewNotePage);

// POST /notes/new (Adds a new note with an OKR attached)
router.post('/', ensureLoggedIn, notesCtrl.create);

// POST /notes/new/:okrId (Adds a new note to a specific OKR)
router.post('/new/:id', ensureLoggedIn, notesCtrl.create);

module.exports = router;