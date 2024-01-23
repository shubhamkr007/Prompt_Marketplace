const express = require('express');
const { uploadPromptController } = require('../controllers/uplaodPrompt.js');
const router = express.Router();


//UPLOAD PROMPT || POST
router.post("/upload-prompt", uploadPromptController);

module.exports = router ;