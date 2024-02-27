const mongoose = require("mongoose");

// Desrtucturing mongoose.Schema and mongoose.model
//which means we are pulling out Schema
//and model from mongoose and storing them in variables
const { Schema, model } = mongoose;

const courseSchema = Schema({
  id: Number,
  first_name: String,
  last_name: String,
  email: String,
  gender: String,
});

module.exports = model("Course", courseSchema);
