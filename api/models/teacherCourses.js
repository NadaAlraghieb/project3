const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const teacherCourseSchema = new Schema({
  
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
  isDeleted: { type: Boolean, default: false },
});
const teacherCourse = mongoose.model("teacherCourse", teacherCourseSchema);
module.exports = teacherCourse;