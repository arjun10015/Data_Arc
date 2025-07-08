const express = require('express');
const router = express.Router();
const { createProject, getProjectsByUser,updateProject } = require('../controllers/projectController');

router.post('/', createProject);
router.get('/user/:userId', getProjectsByUser);
router.put('/:id', updateProject);
module.exports = router;
