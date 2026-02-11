const express=require('express');
const noteModel=require('./models/note.models');

const app=express();

app.use(express.json());

app.post("/notes",async (req,res)=>{
    const data=req.body;
    await noteModel.create({
        title:data.title,
        description:data.description
    })
    console.log(data)
    res.status(201).send("data recieved")
})

module.exports=app;