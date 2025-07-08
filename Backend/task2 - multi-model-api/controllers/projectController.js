const Project = require('../models/Project');

// Create Project for a User
const createProject = async (req, res) => {
    try {
        const project = await Project.create(req.body);
        res.status(201).json(project);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get Projects by User ID
const getProjectsByUser = async (req, res) => {
    const { userId } = req.params;
    try {
        const projects = await Project.find({ userId });
        res.json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateProject = async (req, res) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,         // project ID from URL
      { $set: req.body }, // use $set to specify fields to update
      { new: true }       // return the updated document
    );

    if (!updatedProject) {
      return res.status(404).json({ error: 'Project not found' });
    }

    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {createProject,getProjectsByUser,updateProject};