const express = require('express');
const router = express.Router();
const Profile = require('../models/Profile');

// Get Profile
router.get('/', async (req, res) => {
  const profile = await Profile.findOne();
  res.json(profile || {});
});

// Save or Update Profile
router.post('/', async (req, res) => {
  let profile = await Profile.findOne();
  if (profile) {
    profile = await Profile.findByIdAndUpdate(profile._id, req.body, { new: true });
  } else {
    profile = new Profile(req.body);
    await profile.save();
  }
  res.json(profile);
});

module.exports = router;