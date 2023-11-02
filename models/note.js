const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Okr = require('./okr');

const noteSchema = new Schema({
    noteText: {
      type: String,
      required: true
    },
    logDate: {
      type: Date,
      default: Date(),
      min: Date(),
    },
    okrId: {
      type: Schema.Types.ObjectId,
      ref: 'Okr'
    }
}, {
timestamps: true
});

module.exports = mongoose.model('Note', noteSchema);