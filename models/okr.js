const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const okrSchema = new Schema({
    QuarterYearChoice: {
      type: String,
      enum: ['Q4 2023', 'Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'],
      required: true
    },
    objectiveSpot: {
      type: String,
      enum: ['Objective One', 'Objective Two', 'Objective Three'],
      required: true
    },
    objective: {
      type: String,
      required: true
    },
    eoqDate: {
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

okrSchema.pre('save', function (next) {
  const averageProgress = (this.keyResultOneProgress + this.keyResultTwoProgress + this.keyResultThreeProgress) / 3;
  this.objectiveProgress = averageProgress;
  next();
});

module.exports = mongoose.model('Okr', okrSchema);