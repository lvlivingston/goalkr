const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /notes (see all Notes)
router.get('/', ensureLoggedIn, notesCtrl.indexNote);

// GET /notes/new (see "Add a Note" page)
router.get('/new', ensureLoggedIn, notesCtrl.addNewNotePage);

// // POST /notes/new (Add a new Note)
// router.post('/', ensureLoggedIn, notesCtrl.create);

module.exports = router;