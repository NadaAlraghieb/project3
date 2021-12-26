const express = require("express");
const courseRouter = express.Router();
const {
  saveCourse,
  deleteCourse,
  showAllCourses,
} = require("../controllers/coursesController");
courseRouter.get("/show", showAllCourses);
courseRouter.post("/save", saveCourse);
courseRouter.put("/delete/:id", deleteCourse);
module.exports = courseRouter;