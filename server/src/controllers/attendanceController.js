const Course = require('../models/Course');
const CourseAttendance = require('../models/CourseAttendance');
const DayAttendance = require('../models/DayAttendance');
const User = require('../models/User');


//create current day attendance by professor
exports.createTodayAttendance = async (req, res) => {
    try {
        //fetch data
        const { courseName } = req.body;
        const professorId = req.user.id;

        //validate data
        if(!courseName || !professorId){
            return res.status(400).json({
                success: false,
                message: "Unable to create the attendance"
            })
        }

        const professorDetails = await User.findById(professorId);
        if(!professorDetails) {
            return res.status(400).json({
                success: false,
                message: "Professor does not exist"
            })
        }

        const course = professorDetails.courses.find(course => course.courseName === courseName);
        if(!course) {
            return res.status(400).json({
                success: false,
                message: "Course does not exist"
            })
        }

        //create entry in DB
        const newAttendance = await DayAttendance.create({
            courseId: course._id,
            professorId: professorDetails._id,
            date: Date.now(),
        });

        //add current day attendance to course attendance
        await Course.findByIdAndUpdate(
            {_id: course._id},
            {
                $push: {
                    attendance: newAttendance._id,
                }
            },
            {new: true}
        );

        //response
        return res.status(200).json({
            success: true,
            message: "Attendance created successfully",
            data: newAttendance
        })

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Failed to mark attendance"
        })
    }
};

//mark attendance by each student
exports.markAttendance = async (req, res) => {

    try {
        //fetch data
    const { rfid, courseId, attendanceId }  = req.body;

    //validate
    if(!rfid || !courseId || !attendanceId) {
        return res.status(404).json({
            success: false,
            message: "Invalid course or rfid"
        });
    }

    //find user based on rfid
    const studentDetails = await User.findOne({rfid: rfid});
    if(!studentDetails) {
        return res.status(404).json({
            success: false, 
            message: "User does not exist"
        });
    }

    //find course based on courseId
    const courseDetails = await Course.findById(courseId);
    if(!courseDetails){
        return res.status(404).json({
            success: false,
            message: "This course does not exist"
        });
    }

    //find current attendance instance based on attendance Id
    const currentAttendance = await courseDetails.attendance.find(attendance => attendance._id === attendanceId);
    if(!currentAttendance){
        return res.status(404).json({
            success: false,
            message: "Attendance slot is not available"
        });
    }

    await DayAttendance.findByIdAndUpdate(
        {_id: currentAttendance._id},
        {
            $push: {
                markedAttendance: studentDetails._id 
            }
        }
    )

    return res.status(200).json({
        success: true,
        message: "Attendance marked successfully"
    });
    
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error while marking attendance"
        })
    }
};

//get today's attendance
//