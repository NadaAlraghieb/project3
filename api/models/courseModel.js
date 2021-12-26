const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const courseSchema = new Schema({
  courseName: { type: String, required: true },
  
  isDeleted: { type: Boolean, default: false },
  duration: { type: String, default: false },
});
const Course = mongoose.model("Course", courseSchema);
module.exports = Course;