const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// note subdocument of okrs
const noteSchema = new Schema({
    noteText: {
      type: String,
      required: true
    },
    QuarterYearChoice: {
      type: String,
      enum: ['Q423', 'Q124', 'Q224', 'Q324', 'Q424'],
      required: true
    },
    objective: {
      type: String,
      required: true
    },
    logDate: {
      //may need to change type to date
      type: Date,
      default: Date(),
      min: Date(),
    },
}, {
timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);