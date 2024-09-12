const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        trim: true
    },
    professor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    branch: {
        type: String,
        required: true,
        trim: true
    },
    semester: {
        type: Number,
        required: true
    },
    attendance: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "DayAttendance"
        }
    ],
    studentEnrolled: [
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User"
        }
    ]
}); 

module.exports = mongoose.model("Course", courseSchema);