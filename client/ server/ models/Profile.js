const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String },
  email: { type: String },
  phone: { type: String },
  location: { type: String },
  bio: { type: String },
  skills: { type: String },
  github: { type: String },
  linkedin: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);