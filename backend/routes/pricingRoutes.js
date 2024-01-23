const express = require('express');
const stripe = require('stripe')("sk_test_51ObNMYSD8MI8srpO1BLPOUEgyFsTINwuemRIpWwBMlPTY29Q2kJYwdAvbThXvvdhhl5rbfIZ3mDdfGNa6w4XpNXI00ZxQyYRU6   ")
const router = express.Router();
const path = require('path');
const User = require('../models/userModel.js');

//buy current paln || POST
router.post("/purchase", async (req,res)=>{

    try {
        
        const data = req.body;
        console.log(data)
    
        // console.log(data)
        const lineItems = [{
            price_data: {
                currency: "inr",
                product_data: {
                    name: data.plan,
                },
                unit_amount: data.price * 100,
            },
            quantity: 1
        }];

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: lineItems,
            mode: 'payment',
            success_url: `http://localhost:8000/api/v1/plan/success/${data.userId}/${data.price}`,
            cancel_url: 'http://localhost:3000/pricing',
        });

        // console.log(session);

        res.json({id: session.id});


    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"Payment Error Error"});
    }


});

router.get('/success/:id/:amount', async (req,res) => {
    try {
        let plan = req.params.amount;
        let userId = req.params.id;

        // Find the user by ID
        const user = await User.findById(userId);

        // Update userCredits and save the user
        const remaining = parseInt(user.userCredits); // Assuming plan is a string, convert it to an integer
        const planAmount = parseInt(plan);
        const sum = remaining + planAmount;
        await user.updateOne({userCredits : String(sum)})

        await user.save();

        const htmlFilePath = path.join(__dirname, '../pages/paymentSuccess.html');

        // Render the HTML file
        res.sendFile(htmlFilePath);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;