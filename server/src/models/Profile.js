const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
    },
    dateOfBirth: {
        type: String
    },
    contactNumber: {
        type: String,
        trim: true
    },
    branch: {
        type: String,
        // required: true
    },
    year: {
        type: Number,
        // required: true
    }
});

module.exports = mongoose.model("Profile", profileSchema);