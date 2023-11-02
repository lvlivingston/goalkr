const Okr = require('../models/okr');
const Note = require('../models/note');

module.exports = {
    indexNote,
    addNewNotePage, 
    new: newNote,
    create,
};

async function indexNote(req, res) {
    const notes = await Note.find({});
    res.render('notes/index.ejs', { title: 'All Notes', notes });
}

async function addNewNotePage(req, res) {
  let okrId;
  if (req.params.id) {
    okrId = req.params.id
  }
  res.render('notes/add.ejs', { title: 'Add a Note', okrId });
}

function newNote(req, res) {
  res.render('notes/index.ejs', { title: 'Add a Note', errorMsg: '' });
}

async function create(req, res) {
  for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
  }
  try {
    const note = await Note.create(req.body);
    // console.log(note);
    // const dateString = Note.logDate;
    // const originalDate = new Date(dateString);
    note.save();
    res.status(200);
    res.redirect('/notes');
  } catch (err) {
    console.log(err);
    res.render('notes/index.ejs', { title: 'Add a Note', errorMsg: err.message });
  }
}