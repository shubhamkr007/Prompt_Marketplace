const mongoose = require('mongoose');


const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`connected to MongoDb ${mongoose.connection.host}`)
    }catch(err){
        console.log(`MongoDb database error: ${err}`);
    }
}

module.exports =connectDB;