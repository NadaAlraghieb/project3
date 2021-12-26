const mongoose = require("mongoose");
const { User } = require("../models/userModels");
const bcrypt = require("bcrypt");
const addNewUser = (req, res) => {
  const addedUser = new User({
    fullName:req.body.fullName,
    email:req.body.email,
    password:bcrypt.hashSync(req.body.password, 10),
   city:req.body.city,
   education: req.body.education,
   phoneNumber:req.body.phoneNumber,
   role:req.body.role
  });
  addedUser
    .save()
    .then((result) => {
      res.status(201).json(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
};
// const userLogin = (req, res) => {
//   User.findOne({ email: req.body.email }, (err, user) => {
//     res.json(user);
//   });
// };
const userLogin = (req, res) => {
  User.findOne({ email: req.body.email }, async (err, result) => {
    if (result === null) {
      return res
        .status(400)
        .send("NationalId and Password you entered is Wrong !!!.");
    }
    try {
      if (await bcrypt.compare(req.body.password, result.password)) {
        const payload = {
          email: result.email,
          fullName: result.fullName,
          role: result.role,
        };
        const token = jwt.sign(payload, process.env.SECRET_KEY);
        res.json({ message: "user logged in", token: token });
      } else {
        res.json({ message: "data is incorrect" });
      }
    } catch (error) {
      res.status(500).send();
    }
  });
};
function getUserFromToken(req,res){
  const token = req.user
  res.json({token:token})
}
const getAllUser = (req, res) => {
  User.find({}, (err, users) => {
    res.json(users);
  });
};
const getAllTeacher = (req, res) => {
  User.find({ role: "Teacher" }, (err, teachers) => {
    res.json(teachers);
  });
};
const getAllStudents = (req, res) => {
  User.find({ role: "Student" }, (err, students) => {
    res.json(students);
  });
};
const getTeachersByCourseName = (req, res) => {
  User.find({ courses: req.params.courseName }, (err, result) => {
    res.json(result);
  });
};
const getUser=(req,res)=>{
  User.findOne({ _id: req.params.id}, (err, result) => {
    res.json(result);
  });
}
module.exports = {
  addNewUser,
  userLogin,
  getUserFromToken,
  getAllUser,
  getAllTeacher,
  getAllStudents,
  getTeachersByCourseName,
  getUser
};