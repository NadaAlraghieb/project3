const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentCourseSchema = new Schema({
  // courseName: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
  startDate:{type:String, required: true},
  endDate:{type:String, required: true},
  // name: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
});
const StudentCourse = mongoose.model("StudentCourse", studentCourseSchema);
module.exports = StudentCourse;