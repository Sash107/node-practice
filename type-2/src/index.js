const express = require ('express');
const noteModel=require('./models/note.model');
const mongoose=require('mongoose');

const app= express();

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.post('/notes',async (req,res)=>{
    const data=req.body;
    await noteModel.create({
        title:data.title,
        description:data.description
    })
    res.status(201).json({
        "message":"data send successfully"
    })
})

app.get('/notes',async (req,res)=>{
    const notes=await noteModel.find()

    res.status(201).json({
        "message":"notes fetched successfully",
        "data":notes
    })
})


app.delete('/notes/:idx',async (req,res)=>{
    const idx=req.params.idx;
    if(mongoose.Types.ObjectId.isValid(idx)){
         await noteModel.findOneAndDelete({
            _id:idx
        })
    }
    else{
        await noteModel.findOneAndDelete({
            title:idx
        })
    }
    res.status(201).json({
        "message":"successfully deleted"
    })
})

app.patch('/notes/:id',async (req,res)=>{
    const id=req.params.id;
    const description=req.body.description;

    await noteModel.findOneAndUpdate({_id:id},{description:description})

    res.status(201).json({"message":"node updates successfully"})
})


app.get('/notes',(req,res)=>{
    res.status(202).send("notes");
})
module.exports=app;