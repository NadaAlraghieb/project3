const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  courseName: { type: String, required: true },
  name: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});
const course = mongoose.model("course", courseSchema);
module.exports = course;