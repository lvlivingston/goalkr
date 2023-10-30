const express = require('express');
const router = express.Router();
const notesCtrl = require('../controllers/notes');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// // GET /notes (see all Notes)
// router.get('/notes', ensureLoggedIn, notesCtrl.index);
// // POST /okrs/:okrId/notes (create a note for an OKR)
// router.post('/okrs/:okrId/notes', ensureLoggedIn, notesCtrl.create);

// module.exports = router;