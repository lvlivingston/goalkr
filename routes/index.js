const express = require('express');
const router = express.Router();
const passport = require('passport');
const indexRouter = require("../controllers/index.js");
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET / initial route to login landing page
router.get('/', indexRouter.index);

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used?
  'google',
  {
    // Requesting the user's profile and email
    scope: ['profile', 'email'],
    // Optionally force pick account every time
    // prompt: "select_account"
  }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    failureRedirect: '/'
  }
));

// GET /home (See homepage)
router.get('/home', ensureLoggedIn, indexRouter.home);

// GET /home/whatareokrs (See "What are OKRs" page)
router.get('/whatareokrs', ensureLoggedIn, indexRouter.viewWhat);

// GET /home/bestpractices (See "OKR Best Practices" page)
router.get('/bestpractices', ensureLoggedIn, indexRouter.viewBest);

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout(function() {
    res.redirect('/');
  });
});

module.exports = router;
