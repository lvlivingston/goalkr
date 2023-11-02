const Okr = require('../models/okr');
const Note = require('../models/note');

module.exports = {
    index, 
    home,
    viewWhat,
    viewBest,
};
  
function index(req, res) {
    res.render("home/index.ejs", {
      title: "Homepage"
    });
}
  
async function home(req, res) {
    res.render('home/index.ejs', { title: 'Homepage' });
}

async function viewWhat(req, res) {
    res.render('home/what.ejs', { title: 'What are OKRs?' });
}

async function viewBest(req, res) {
    res.render('home/best.ejs', { title: 'OKR Best Practices' });
}