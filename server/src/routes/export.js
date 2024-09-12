// src/routes/export.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const role = require('../middleware/roleMiddleware');
const Attendance = require('../models/Attendance');
const { Parser } = require('json2csv');

router.get('/attendance/csv', auth, role('Admin', 'Teacher'), async (req, res, next) => {
    try {
        const attendance = await Attendance.find();
        const json2csvParser = new Parser();
        const csv = json2csvParser.parse(attendance);

        res.header('Content-Type', 'text/csv');
        res.attachment('attendance.csv');
        res.send(csv);
    } catch (err) {
        next(err);
    }
});

module.exports = router;
