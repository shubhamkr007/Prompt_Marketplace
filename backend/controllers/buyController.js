const Prompt = require('../models/promptModel.js')
const User = require('../models/userModel.js')
var CryptoJS = require("crypto-js");

const buyPrompt = async (req, res) =>{
    try {
        const existingUser = await User.findOne({ _id: req.body.userId });
        const prompt = req.params.id;


        const promptToPurchase = await Prompt.findById(prompt);
        
        // console.log(promptToPurchase);
        const promptPrice = promptToPurchase.price;
        existingUser.userCredits -= promptPrice;

        existingUser.prompts.push(prompt);
        await existingUser.save();

        const key = process.env.PROMPT_KEY;

      var bytes = CryptoJS.AES.decrypt(promptToPurchase.promptData, key);
      var originalPrompt = bytes.toString(CryptoJS.enc.Utf8);
      promptToPurchase.promptData = originalPrompt;

        return res.status(200).send({
            success: true,
            message: "Purchase Successfull 👍",
            promptToPurchase
          });
    } catch (error) {
        console.log(error)
        return res.status(404).send({
            success: false,
            message: 'Server Error!',
        })
    }
}

module.exports = { buyPrompt };