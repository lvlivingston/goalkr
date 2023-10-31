const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const okrSchema = new Schema({
    objective: {
      type: String,
      required: true
    },
    eoqDate: {
      //may need to change type to date
      type: Date,
      default: function() {
        return new Date();
      },
      min: Date(),
    },
    objectiveProgress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    keyResultOne: {
      type: String,
      required: true
    },
    dueDateOne: {
      //may need to change type to date
      type: Date,
      default: function() {
        return new Date();
      },
      min: Date(),
    },
    keyResultOneProgress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    keyResultTwo: {
      type: String,
      required: true
    },
    dueDateTwo: {
      //may need to change type to date
      type: Date,
      default: function() {
        return new Date();
      },
      min: Date(),
    },
    keyResultTwoProgress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },
    keyResultThree: {
      type: String,
      required: true
    },
    dueDateThree: {
      //may need to change type to date
      type: Date,
      default: function() {
        return new Date();
      },
      min: Date(),
    },
    keyResultThreeProgress: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    }
}, {
timestamps: true
});

module.exports = mongoose.model('Okr', okrSchema);