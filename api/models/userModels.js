const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  city: { type: String, required: true },
  education: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  courses: [String],
  role: { type: String },
});
module.exports.User = mongoose.model("User", userSchema);