const mongoose = require("mongoose");

const roleSchema = new mongoose.Schema({
    title:String,
})
module.exports.Role = mongoose.model("Role", roleSchema);