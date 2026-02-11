const ImageKit=require('@imagekit/nodejs');

const client= new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(myfile){
    try{
        const response=await client.files.upload({
            file:myfile.buffer.toString("base64"),
            fileName:"myfile.originalname"
        })
        return response;
    }catch(error){console.log(error)}

}

module.exports=uploadFile;