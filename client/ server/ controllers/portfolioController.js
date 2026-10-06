const PortfolioProject = require("../models/PortfolioProject");

// Get All Showcase Projects for Portfolio
exports.getPortfolioProjects = async (req, res) => {
  try {
    const projects = await PortfolioProject.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching portfolio projects", error: error.message });
  }
};

// Add New Showcase Project
exports.addPortfolioProject = async (req, res) => {
  try {
    const { title, tech, description, status } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Project title is required" });
    }

    const newProject = new PortfolioProject({
      title,
      tech,
      description,
      status
    });

    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (error) {
    res.status(400).json({ message: "Error saving portfolio project", error: error.message });
  }
};

// Delete a Showcase Project
exports.deletePortfolioProject = async (req, res) => {
  try {
    await PortfolioProject.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Portfolio project deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project", error: error.message });
  }
};