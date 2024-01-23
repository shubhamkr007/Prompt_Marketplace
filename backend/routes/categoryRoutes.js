const express = require('express');
const { getCategoryByName } = require('../controllers/categoryController.js');
const router = express.Router();

//Get all prompts || GET
router.get("/:id", getCategoryByName);

module.exports = router ;