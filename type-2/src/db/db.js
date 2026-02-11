const mongoose = require('mongoose');

async function connectDB(){
    await mongoose.connect("mongodb+srv://learner:dgNZssMCwWvEa5r6@cluster0.h3tge2x.mongodb.net/halley");
    console.log("connected to DB");
}

module.exports = connectDB;