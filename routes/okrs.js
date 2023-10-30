const express = require('express');
const router = express.Router();
const okrsCtrl = require('../controllers/okrs');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// // GET /okrs (see all OKRs)
// router.get('/', ensureLoggedIn, okrsCtrl.index);
// // GET /okrs/:okrsId (see detail page of a specific OKR)
// router.get('/:okrId', ensureLoggedIn, okrsCtrl.show);
// // GET /okrs/:okrsId (see detail page of a specific OKR)
// router.get('/notes', ensureLoggedIn, okrsCtrl.show);
// // POST /okrs (add a new OKR)
// router.post('/', ensureLoggedIn, okrsCtrl.create);
// // DELETE /okrs/:okrsId (delete an OKR)
// router.delete('/:okrId', ensureLoggedIn, okrsCtrl.delete);
// // PUT /okrs/:okrsId (update an OKR)
// router.put('/:okrId', ensureLoggedIn, okrsCtrl.update);
	
// module.exports = router;