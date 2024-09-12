const mongoose = require('mongoose');

const dayAttendanceSchema = mongoose.Schema({
    courseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course"
    },
    professorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    date: {
        type: Date,
        required: true
    },
    markedAttendance: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    createdAt: Date.now(),
});

module.exports = mongoose.model("DayAttendance", dayAttendanceSchema);