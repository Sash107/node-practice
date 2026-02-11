const app=require("./src/index.js")
const connectDB=require("./src/db/db.js")

connectDB();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})