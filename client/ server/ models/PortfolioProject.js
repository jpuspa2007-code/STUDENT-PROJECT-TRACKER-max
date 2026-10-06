const mongoose = require('mongoose');

const portfolioProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  tech: { type: String },
  description: { type: String },
  status: { type: String, default: 'Completed' }
}, { timestamps: true });

module.exports = mongoose.model('PortfolioProject', portfolioProjectSchema);