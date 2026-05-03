const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    name: String,
    marks: Number,
    address: String
});

module.exports = mongoose.model("Student",StudentSchema);