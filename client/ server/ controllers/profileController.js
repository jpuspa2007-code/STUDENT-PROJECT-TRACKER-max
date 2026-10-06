const Profile = require("../models/Profile");

// Get User Profile Details
exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) {
      return res.status(200).json({});
    }
    res.status(200).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile", error: error.message });
  }
};

// Save or Update Profile Details
exports.updateProfile = async (req, res) => {
  try {
    let profile = await Profile.findOne();

    if (profile) {
      // Update existing profile
      profile = await Profile.findByIdAndUpdate(profile._id, req.body, { new: true });
    } else {
      // Create initial profile if none exists
      profile = new Profile(req.body);
      await profile.save();
    }

    res.status(200).json(profile);
  } catch (error) {
    res.status(400).json({ message: "Error updating profile", error: error.message });
  }
};