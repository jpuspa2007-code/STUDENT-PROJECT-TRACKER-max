// Get System Overview & Tech Stack Info for About Page
exports.getAboutInfo = (req, res) => {
  try {
    res.status(200).json({
      appName: "Student Project Tracker & Portfolio Portal",
      version: "1.0.0",
      description: "A complete portal to track student projects, manage daily tasks, and display professional portfolios.",
      techStack: [
        { layer: "Frontend", tech: "React.js, Vite, React Router, CSS3" },
        { layer: "Backend", tech: "Node.js, Express.js" },
        { layer: "Database", tech: "MongoDB & Mongoose" }
      ],
      features: [
        "Project Progress Tracking",
        "Task Management with Status Updates",
        "User Profile Customization",
        "Showcase Projects Portfolio"
      ],
      status: "Active & Running"
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};