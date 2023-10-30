const User = require('../models/user');
const Okr = require('../models/okr');
const Note = require('../models/note');

module.exports = {
  // add exports here i.e. index, show, newOkr, create, delete
      home,
      index, 
      // errorOkr,
      // create,
      // show,
      // delete: deleteOkr
  };
  
async function home(req, res) {
      res.render('home/index.ejs', { title: 'Homepage' });
}

function index(req, res) {
  res.render("home/index.ejs", {
    title: "Homepage"
  });
}

// async function index(req, res) {
//   const okrs = await Okr.find({});
//   res.render('okrs/new', { title: 'Add an Okr', okrs });
// }

// // redirect to "Add OKR" page by clicking on the "Add OKR icon"
// function addOkr(req, res) {
//   res.render("okrs/new", {
//     title: "Add an OKR"
//   });
// }

// render the "Add Note" icon/link & be able & be able to redirect to "Add Note" page

// render the "What are OKRs?" link/button & be able to redirect to "What are OKRs?" page 

// render the "OKR Best Practices" link/button & be able to redirect to "OKR Best Practices" page 
