const User = require('../models/user');
const Okr = require('../models/okr');
const Note = require('../models/note');

module.exports = {
// add exports here i.e. index, show, newOkr, create, delete
    indexNote,
    addNewNotePage, 
    // new: newNote,   
    // errorOkr,
    // create,
    // show,
    // delete: deleteOkr
};

async function indexNote(req, res) {
    const notes = await Note.find({});
    // this is the file name in the views folder
    res.render('notes/index.ejs', { title: 'All Notes', notes });
}

async function addNewNotePage(req, res) {
  res.render('notes/add.ejs', { title: 'Add a Note' });
}

// async function newNote(req,res) {
//   for (let key in req.body) {
//     if (req.body[key] === '') delete req.body[key];
//   }
//   try {
//     const note = await Note.create(req.body);
//     res.redirect('notes');
//   } catch (err) {
//     console.log(err);
//     res.render('notes', { errorMsg: err.message });
//   }
// }


// render "Add Note" view, including:
// Textbox to type in Note (max 500 characters)
// Dropdown to choose Quarter & Year (i.e. Q4 - 2023)
// Dropdown to choose OKR attribution (i.e. O1 - KR2)
// Button to "Add to OKR List"

// render "No Notes" view of Note page, includes:
// Static text with "You haven't taken any notes yet"
// "Add Note" icon/link

// render "With Notes" view of Note page, includes:
// Table with 3 column headers (Date (timestamp), Note, OKR)
// Left column : Date (formatted as mm/dd/year)
// Middle column: Note
// Right column: O1 - KR2 (clickable to OKR detail page)

