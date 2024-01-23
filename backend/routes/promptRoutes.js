const express = require('express');
const { getAllPrompts, getPromptData, userPrompts } = require('../controllers/promptController');
const authMiddleware = require('../middlewares/authMiddleware');
const { buyPrompt } = require('../controllers/buyController');
const router = express.Router();

//Get all prompts || GET
router.get("/getall", getAllPrompts);

//Get prompt || POST
router.post("/:id", getPromptData);

//Get prompt || GET
router.get("/userPrompts",authMiddleware, userPrompts);

//Get prompt || PATCH
router.patch("/:id/buy",authMiddleware, buyPrompt);

module.exports = router ;