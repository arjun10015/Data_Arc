const express = require('express');
const router = express.Router();
const { createUser, getUsers, getUsersWithProjects} = require('../controllers/userController');

router.post('/', createUser);
router.get('/', getUsers);
router.get('/with-projects', getUsersWithProjects);

module.exports = router;
