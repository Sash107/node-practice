const mongoose =require('mongoose');

async function connectDB(){
    await mongoose.connect("");
    console.log("DB connected");
}

module.exports=connectDB;
