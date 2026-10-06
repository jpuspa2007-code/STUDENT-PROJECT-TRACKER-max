const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    appName: "Project Management & Portfolio Portal",
    version: "1.0.0",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    status: "Active"
  });
});

module.exports = router;