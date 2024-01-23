const bcrypt = require('bcrypt')
const Prompt = require('../models/promptModel.js')
var CryptoJS = require("crypto-js");

const uploadPromptController = async (req, res) => {
    try {

        
        const key = process.env.PROMPT_KEY;

        let encrypted = CryptoJS.AES.encrypt(req.body.promptData, key).toString();

        // console.log(req.body)
        // const salt = await bcrypt.genSalt(10);
        // const hashedDescription = await bcrypt.hash(req.body.promptDescription, salt);
        req.body.promptData = encrypted;

        //reset data
        const prompt = new Prompt(req.body);
        await prompt.save();
        return res.status(201).send({
            success: true,
            message: "Prompt Submited Successfully 👍!",
            prompt,
        });
    } catch (error) {
        console.log(error);
    }
}

module.exports = { uploadPromptController };