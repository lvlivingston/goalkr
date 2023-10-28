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
      type: Number,
      default: function() {
        return new Date().getFullYear();  
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