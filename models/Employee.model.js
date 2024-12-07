const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Employee Firstname is required!"]
  },
  lastName: {
    type: String,
    required: [true, "Employee Lastname is required"]
  },
  email: {
    type: String,
    required: [true, "Employee email is required!"],
    unique: [true, "Email address already exists"]
  },
  position: {
    type: String,
    required: [true, "Postion is required!"]
  },
  status: { type: Boolean, default: true },

  skills: {
    type: [String],
    required: [true, "Skills are required!"]

  },
  description: {
    type: String,
    required: [true, "About is required! "]
  }
});

module.exports = new mongoose.model('Employee', employeeSchema);
