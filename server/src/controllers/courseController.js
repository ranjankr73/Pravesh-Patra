const Course = require("../models/Course");
const { populate } = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");

exports.createCourse = async (req, res) => {
  try {
    //fetch data
    const { courseName, branch, semester } = req.body;

    //data validation
    if (!courseName || !branch || !semester) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //check for professor
    const userId = req.user.id;
    const professorDetails = await User.findById(userId);
    console.log("Professor Details: ", professorDetails);

    //check whether professor exist or not
    if (!professorDetails) {
      return res.status(404).json({
        success: false,
        message: "Professor details not found",
      });
    }

    //create entry for new course
    const newCourse = await Course.create({
      courseName,
      branch,
      semester,
      professor: professorDetails._id,
    });

    //add new course to the user schema of professor
    await User.findByIdAndUpdate(
      { _id: professorDetails._id },
      {
        $push: {
          courses: newCourse._id,
        },
      },
      { new: true }
    );

    //return reponse
    return res.status(200).json({
      success: true,
      message: "Course created successfully",
      data: newCourse,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create course",
      error: error.message,
    });
  }
};

//get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const allCourses = await Course.find(
      {},
      {
        courseName: true,
        professor: true,
        studentsEnrolled: true,
        semester: true,
        branch: true,
      }
    )
      .populate("professor")
      .exec();

    return res.status(200).json({
      success: true,
      message: "Data for all courses fetched successfully",
      data: allCourses,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch all courses",
      error: error.message,
    });
  }
};

//get course details
exports.getCourseDetals = async (req, res) => {
  try {
    //fetch data
    const { courseId } = req.body;

    //find courseDetails
    const courseDetails = Course.findById(courseId)
      .populate({
        path: "professor",
        populate: {
          path: "additionalDtails",
        },
      })
      .populate({
        path: "attendance",
        populate: {
          path: "markdedAttendance",
        },
      })
      .populate("studentEnrolled")
      .exec();

    if (!courseDetails) {
      return res.status(404).json({
        success: false,
        message: "Course does not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Course details fetched successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Server error while getting course details",
    });
  }
};
