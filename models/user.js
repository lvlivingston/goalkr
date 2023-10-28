const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// note subdocument of okrs
const noteSchema = new Schema({
  note: {
    type: String,
    required: true
    }, {
      timestamps: true
    }
  });

// okr subdocument of user
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
    notes: [noteSchema]
  timestamps: true
  }, {
  timestamps: true
});

// main user schema
const userSchema = new Schema({
  name: String,
  googleId: {
    type: String,
    required: true
  },
  email: String,
  avatar: String,
  okrs: [okrSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
