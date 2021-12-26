const express = require("express");
const userRouter = express.Router();
const {
  addNewUser,
  userLogin,
  getAllUser,
  getAllStudents,
  getAllTeacher,
  getTeachersByCourseName,
  getUser
} = require("../Controllers/userController");
userRouter.get("/show", getAllUser);
userRouter.post("/register", addNewUser);
userRouter.post("/login", userLogin);
userRouter.get("/students", getAllStudents);
userRouter.get("/teacher", getAllTeacher);
userRouter.get("/teacher/:courseName", getTeachersByCourseName);
userRouter.get("/show/:id", getUser);
module.exports = userRouter;