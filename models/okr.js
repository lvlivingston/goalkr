const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const okrSchema = new Schema({
    objective: {
      type: String,
      required: true
    },
    keyResultOne: {
      type: String,
      required: true
    },
    keyResultTwo: {
      type: String,
      required: true
    },
    keyResultThree: {
      type: String,
      required: true
    },
    dueDate: {
      //may need to change type to date
      type: Date,
      default: function() {
        return new Date();
      },
      min: Date(),
    },
    progress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    }
}, {
timestamps: true
});

module.exports = mongoose.model('Okr', okrSchema);