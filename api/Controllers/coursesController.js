const course = require("../models/courseModel");
///////////////////////////////////////////
const saveCourse = (req, res) => {
  const newCourse = new course(req.body);
  newCourse
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};
///////////////////////////////////////////
const showAllCourses = (req, res) => {
  course.find({ isDeleted: false }, (err, course) => {
    res.json(course);
  });
};
//////////////////////////////////////////
const deleteCourse = (req, res) => {
  course.findByIdAndUpdate(
    { _id: req.params.id },
    {
      isDeleted: true,
    },
    (err, course) => {
      res.json(course);
    }
  );
};
module.exports = { saveCourse, deleteCourse, showAllCourses };