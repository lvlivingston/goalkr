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
