const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const Attendance = require('../models/Attendance');
const sendEmail = require('../services/emailService');

// Mark attendance
router.post('/mark', auth, role('Admin', 'Teacher'), async (req, res) => {
    const { studentId, status, className } = req.body;

    try {
        const attendance = new Attendance({
            student: studentId,
            status,
            class: className,
        });

        await attendance.save();

        await sendEmail({
            to: req.body.studentEmail,
            subject: 'Attendance Marked',
            text: `Your attendance has been marked for ${req.body.date}`,
        });

        res.status(201).json({ msg: 'Attendance marked successfully', attendance });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update attendance
router.put('/update/:id', auth, role('Admin', 'Teacher'), async (req, res) => {
    const { status, className } = req.body;

    try {
        const attendance = await Attendance.findById(req.params.id);

        if (!attendance) {
            return res.status(404).json({ msg: 'Attendance record not found' });
        }

        attendance.status = status || attendance.status;
        attendance.class = className || attendance.class;

        await attendance.save();
        res.json({ msg: 'Attendance updated successfully', attendance });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get attendance for a specific student
router.get('/:studentId', auth, role('Admin', 'Teacher'), async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find({ student: req.params.studentId });

        if (!attendanceRecords.length) {
            return res.status(404).json({ msg: 'No attendance records found' });
        }

        res.json(attendanceRecords);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all attendance records
router.get('/', auth, role('Admin', 'Teacher'), async (req, res) => {
    try {
        const attendanceRecords = await Attendance.find();
        res.json(attendanceRecords);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
