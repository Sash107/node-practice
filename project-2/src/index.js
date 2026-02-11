const express=require("express");
const multer=require("multer");
const uploadFile = require("./services/storage.services");
const postModel=require("./models/post.models");
const cors=require("cors");

const app=express();

app.use(cors());
const upload=multer({storage:multer.memoryStorage()});
app.use(express.json());

app.post("/create-post",upload.single("image"),async (req,res)=>{
    const caption=req.body.caption;
    const myfile=req.file
    const response=await uploadFile(myfile);
    const data= await postModel.create({
        image:response.url,
        caption:caption
    })
    return res.status(201).json({
        message:"post created successfully",
        data
    })
})

app.get("/posts",async (req,res)=>{
    const data= await postModel.find();
    return res.status(200).send(data)
})

module.exports=app;