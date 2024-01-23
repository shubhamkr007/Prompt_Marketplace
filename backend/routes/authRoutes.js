const express = require('express');
const { loginController, signupController, currentUserController } = require('../controllers/authController.js');
const authMiddleware = require( '../middlewares/authMiddleware.js')
const router = express.Router();

//LOGIN || POST
router.post("/login", loginController);

//SIGNUP || POST
router.post("/signup", signupController);

//GET CURR USER || GET
router.get('/current-user', authMiddleware, currentUserController );

module.exports = router ;