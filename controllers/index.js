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

// render the "Add Okr" icon/link & be able to click to "Add OKR" page

// render the "Add Note" icon/link & be able to click to "Add Note" page

// render the "What are OKRs?" link & be able to click to "What are OKRs?" page (Ideally, have screen swipe left to show info on right)

// render the "OKR Best Practices" link & be able to click to "OKR Best Practices" page (Ideally, have screen swipe left to show info on right)
