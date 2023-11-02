const express = require('express');
const router = express.Router();
const okrsCtrl = require('../controllers/okrs');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /okrs/index (See "All OKRs" page)
router.get('/', ensureLoggedIn, okrsCtrl.indexOkr);

// DELETE /okrs/:okrsId (Delete an OKR)
router.delete('/:id', ensureLoggedIn, okrsCtrl.deleteOkr);

// GET /okrs/new (See "Add an OKR" page)
router.get('/new', ensureLoggedIn, okrsCtrl.addNewOkrPage);

// POST /okrs (Adds a new OKR)
router.post('/', ensureLoggedIn, okrsCtrl.create);

// GET /okrs/:okrsId (See "OKR Detail" page for a specific OKR)
router.get('/:id', ensureLoggedIn, okrsCtrl.viewDetails);

//GET /reviews/:id/update (See "Update an OKR" view on "OKR Details" page)
router.get('/:id/update', ensureLoggedIn, okrsCtrl.showUpdate);

//PUT /okrs/:okrsId (Updates changes to an OKR)
router.put('/:id', ensureLoggedIn, okrsCtrl.updateOkr);
	
module.exports = router;

