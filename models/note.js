const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Okr = require('./okr');

const noteSchema = new Schema({
    noteText: {
      type: String,
      required: true
    },
    // QuarterYearChoice: {
    //   type: String,
    //   enum: ['Q423', 'Q124', 'Q224', 'Q324', 'Q424'],
    // },
    logDate: {
      //may need to change type to date
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