const Okr = require('../models/okr');
const Note = require('../models/note');

module.exports = {
    indexOkr,
    addNewOkrPage,    
    fetchedOkrs,
    create,
    viewDetails,
    deleteOkr,
    showUpdate,
    updateOkr
};

async function indexOkr(req, res) {
    const okrs = await Okr.find({});
    res.render('okrs/index', { title: 'All OKRs', okrs });
}

async function addNewOkrPage(req, res) {
    try {
        const okrs = await Okr.find({});
        res.render('okrs/add', { title: 'Add an OKR', okrs: okrs });
    } catch (err) {
        res.render('error', { error: err });
    }
}

async function fetchedOkrs(req, res) {
    const okrs = await Okr.find({});
    res.render('okrs/add', { okrs: okrs });
}

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
      const okr = await Okr.create(req.body);
      okr.save();
      res.status(200);
      res.redirect('/okrs');
    } catch (err) {
      console.log(err);
      res.render('okrs/index', { title: 'Add an OKR', errorMsg: err.message });
    }
}

async function viewDetails(req, res) {
    try {
        const okrId = req.params.id;
        const okr = await Okr.findById(okrId);
        const notes = await Note.find({ okrId: okrId });
        const data = {
            _id: okr._id,
            QuarterYearChoice: okr.QuarterYearChoice,
            objectiveSpot: okr.objectiveSpot,
            objective: okr.objective,
            eoqDate: okr.eoqDate,
            keyResultOne: okr.keyResultOne,
            dueDateOne: okr.dueDateOne,
            keyResultOneProgress: okr.keyResultOneProgress,
            keyResultTwo: okr.keyResultTwo,
            dueDateTwo: okr.dueDateTwo,
            keyResultTwoProgress: okr.keyResultTwoProgress,
            keyResultThree: okr.keyResultThree,
            dueDateThree: okr.dueDateThree,
            keyResultThreeProgress: okr.keyResultThreeProgress,
        };
        res.render('okrs/detail', { title: 'OKR Details', data, notes });
    } catch (err) {
        console.log(err);
        res.render('okrs/index', { title: 'OKR Details', errorMsg: err.message });
    }
}

async function deleteOkr(req, res, next) {
    try {
        const okrId = req.params.id;
        const deletedOkr = await Okr.findByIdAndDelete(okrId);
        if (!deletedOkr) {
            return res.status(404).send('OKR not found');
        }
        res.redirect('/okrs'); // Redirect to the OKR list page after successful deletion
    } catch (err) {
        console.log(err);
        res.status(500).render('okrs/index', { title: 'All OKRs', errorMsg: err.message });
    }
}

function showUpdate(req, res) {
    const okrId = req.params.id;
    const okrToUpdate = Okr.findByIdAndDelete(okrId);
    res.render('okrs/update', {title: 'Update your OKR', okrToUpdate});
}

async function updateOkr(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    }
    try {
        const okr = await Okr.findById(req.params.id);
        okr.objective = req.body.objective;
        okr.eoqDate = req.body.eoqDate;
        okr.objectiveProgress = req.body.objectiveProgress;
        okr.keyResultOne = req.body.keyResultOne;
        okr.dueDateOne = req.body.dueDateOne;
        okr.keyResultOneProgress = req.body.keyResultOneProgress;
        okr.keyResultTwo = req.body.keyResultTwo;
        okr.dueDateTwo = req.body.dueDateTwo;
        okr.keyResultTwoProgress = req.body.keyResultTwoProgress;
        okr.keyResultThree = req.body.keyResultThree;
        okr.dueDateThree = req.body.dueDateThree;
        okr.keyResultThreeProgress = req.body.keyResultThreeProgress;
        okr.save();
        res.status(200);
        res.redirect('/okrs');
    } catch (err) {
        console.log(err);
        res.render('okrs/index', { title: 'All OKRs', errorMsg: err.message });
    }
}