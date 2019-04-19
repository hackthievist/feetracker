const mongoose = require('mongoose');

const { Schema } = mongoose;

const studentSchema = new Schema({
  school_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'School',
  },
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  guardian_name: {
    type: String,
    required: true,
  },
  guardian_number: {
    type: String,
    required: true,
  },
  guardian_email: {
    type: String,
    required: true,
  },
  amount_paid: {
    type: Number,
    required: true,
  },
  class_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class',
  },
  reg_number: {
    type: String,
    unique: true,
    required: true,
  },
});
module.exports = mongoose.model('Student', studentSchema);