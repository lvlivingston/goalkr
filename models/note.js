const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// note subdocument of okrs
const noteSchema = new Schema({
    note: {
      type: String,
      required: true
    }
}, {
timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);