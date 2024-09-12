const Profile = require('../models/Profile');
const User = require('../models/User');


//edit profile details
exports.updateProfile = async (req, res) => {
    try {
        //fetch data
        const { gender, dateOfBirth="", contactNumber=null, branch, year} = req.body;

        //get userId
        const userId = req.user.id;

        //validation
        if(!branch || !gender || !year || !userId){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        //find profile
        const userDetails = await User.findById(userId);
        const profileId = userDetails.additionalDetails;
        const profileDetails = await Profile.findById(profileId);

        //update profile
        profileDetails.gender = gender;
        profileDetails.dateOfBirth = dateOfBirth;
        profileDetails.contactNumber = contactNumber;
        profileDetails.branch = branch;
        profileDetails.year = year;

        await profileDetails.save();

        //return response
        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            profileDetails
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Server error while updating profile"
        });
    }
};

//delete account
exports.deleteAccount = async (req, res) => {
    try {
        //get id
        const userId = req.user.id;

        //validation
        const userDetails = await User.findById(userId);
        if(!userDetails) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        //delete profile
        await Profile.findByIdAndDelete({_id: userDetails.additionalDetails});

        //TODO: unenroll user from all enrolled courses

        //delete user
        await User.findByIdAndDelete({_id: userId});
        //TODO: job scheduling
        //return response
        return res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "User cannot be deleted successfully"
        })
    }
}

exports.getAllUserDetails = async (req, res) => {
    try {
      const id = req.user.id
      const userDetails = await User.findById(id)
        .populate("additionalDetails")
        .exec()
      console.log(userDetails)
      res.status(200).json({
        success: true,
        message: "User Data fetched successfully",
        data: userDetails,
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      })
    }
  }