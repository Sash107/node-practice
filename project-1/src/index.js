const express=require("express");
const postModel=require("./models/post.model");
const multer=require('multer');
const uploadFile=require("./services/storage.service")

const app=express();
app.use(express.json());
 
const upload=multer({storage:multer.memoryStorage()})

app.post('/create-post',upload.single("image"),async (req,res)=>{

    const result=await uploadFile(req.file.buffer);
    
    const data=await postModel.create({
        image:result.url,
        caption:req.body.caption
    })

    return res.status(201).json({
        message: "Post Created Successfully",
        data
    })
})

app.get("/posts",async(req,res)=>{
    const data= await postModel.find()

    return res.status(201).json({
        message:"Posts fetched successfully",
        data 
    })
})

module.exports=app;