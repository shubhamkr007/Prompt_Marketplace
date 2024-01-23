const Prompt = require('../models/promptModel.js')
const User = require('../models/userModel.js')
var CryptoJS = require("crypto-js");


const getAllPrompts = async (req, res) => {
    try {
        let prompts = await Prompt
      .find({})
      .sort({ createdAt: -1 });

      // // console.log(prompts);
      // const key = process.env.PROMPT_KEY;

      // // for(let i=0;i<prompts.length;i++){
      //   var bytes  = CryptoJS.AES.decrypt(prompts[0].promptDescription, key);
      //   var originalText = bytes.toString(CryptoJS.enc.Utf8);
      //   prompts[0].promptDescription = originalText;
      // // }

    return res.status(200).send({
      success: true,
      message: "get all prompt successfully",
      prompts,
    });
    } catch (error) {
        console.log(error);
    }
}


const getPromptData = async (req,res)=>{
  try {
    const id = req.params.id;
    const prompt = await Prompt.findById(id);

    console.log(req.body);
    const user = await User.findById(req.body.userId);

    // await User.updateOne(
    //   { _id: req.body.userId },
    //   { $push: { prompts: id } }
    // );

    if (user && user.prompts.includes(prompt._id)) {
      const key = process.env.PROMPT_KEY;

      var bytes = CryptoJS.AES.decrypt(prompt.promptData, key);
      var originalPrompt = bytes.toString(CryptoJS.enc.Utf8);
      prompt.promptData = originalPrompt;
      // console.log(originalPrompt);
    }else if(!req.body.userId){
      prompt.promptData = "Login To access";
    }else{
      prompt.promptData = "Unauthorized";
    }

      return res.status(200).send({
        success: true,
        message: "get prompt successfully",
        prompt,
      });

  } catch (error) {
    console.log(error)
  }
}

  const userPrompts = async (req , res)=>{
    // console.log(res.body)
    const existingUser = await User.findOne({ _id: req.body.userId });
     // Get the prompts array from the user
     const userPromptsIds = existingUser.prompts;

     // Find prompts with _id in the user's prompts array
     const userPrompts = await Prompt.find({ _id: { $in: userPromptsIds } }).sort({updatedAt:-1});
     return res.status(200).send({
      success: true,
      message: "get current user Pormpts successfully",
      userPrompts,
    });
  }

module.exports = { getAllPrompts, getPromptData, userPrompts };