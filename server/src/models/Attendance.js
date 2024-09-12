const mongoose = require('mongoose');

const AttendanceSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Late'],
        required: true,
    },
    class: {
        type: String,
        required: false, // Add this if you want to track attendance per class
    },
}, { timestamps: true });
module.exports = mongoose.model('Attendance', AttendanceSchema);
