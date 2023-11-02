const express = require('express');
const router = express.Router();
const okrsCtrl = require('../controllers/okrs');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /okrs/index (see all OKRs)
router.get('/', ensureLoggedIn, okrsCtrl.indexOkr);

// DELETE /okrs/:okrsId (delete an OKR)
router.delete('/:id', ensureLoggedIn, okrsCtrl.deleteOkr);

// GET /okrs/new (see "Add an OKR" page)
router.get('/new', ensureLoggedIn, okrsCtrl.addNewOkrPage);

// POST /okrs (add a new OKR)
router.post('/', ensureLoggedIn, okrsCtrl.create);

// GET /okrs/:okrsId (see detail page of a specific OKR)
router.get('/:id', ensureLoggedIn, okrsCtrl.viewDetails);

//GET /reviews/:id/update (going to the update page)
router.get('/:id/update', ensureLoggedIn, okrsCtrl.showUpdate);

// PUT /okrs/:okrsId (update an OKR)
router.put('/:id', ensureLoggedIn, okrsCtrl.updateOkr);
	
module.exports = router;

