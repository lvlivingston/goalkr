const express = require('express');
const router = express.Router();
const okrsCtrl = require('../controllers/okrs');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /okrs/index (see all OKRs)
// the /new is the URL
router.get('/', ensureLoggedIn, okrsCtrl.indexOkr);

// GET /okrs/new (see "Add an OKR" page)
// the /new is the URL
router.get('/new', ensureLoggedIn, okrsCtrl.addNewOkrPage);

// POST /okrs (add a new OKR)
router.post('/', ensureLoggedIn, okrsCtrl.create);

// GET /okrs/:okrsId (see detail page of a specific OKR)
router.get('/:id', ensureLoggedIn, okrsCtrl.viewDetails);

// DELETE /okrs/:okrsId (delete an OKR)
router.delete('/:id', ensureLoggedIn, okrsCtrl.deleteOkr);

// // PUT /okrs/:okrsId (update an OKR)
// router.put('/:okrId', ensureLoggedIn, okrsCtrl.update);
	
module.exports = router;

