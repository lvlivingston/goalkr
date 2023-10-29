// do i need this page at all??

const User = require('../models/user');
const Okr = require('../models/okr');
const Note = require('../models/note');

module.exports = {
  index
}

function index(req, res) {
  res.render("index", {
    title: "Homepage"
  });
}

// render the "Add Okr" icon/link on screen & be able to redirect to "Add OKR" page

// render the "Add Note" icon/link & be able & be able to redirect to "Add Note" page

// render the "What are OKRs?" link/button & be able to redirect to "What are OKRs?" page 

// render the "OKR Best Practices" link/button & be able to redirect to "OKR Best Practices" page 
