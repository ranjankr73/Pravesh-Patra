// src/routes/dashboard.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const Attendance = require('../models/Attendance'); // Assuming you have this model
const User = require('../models/User');

// Get Attendance Summary
router.get('/attendance-summary', auth, role('admin', 'teacher'), async (req, res) => {
    try {
        const totalClasses = await Attendance.countDocuments(); // Example query
        const presentCount = await Attendance.countDocuments({ status: 'Present' });
        const absentCount = await Attendance.countDocuments({ status: 'Absent' });

        res.json({ totalClasses, presentCount, absentCount });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get User List
router.get('/users', auth, role('admin'), async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
