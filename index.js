import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const app=express(),port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',async(req,res)=>{
    try{
        const response=await axios.get("https://secrets-api.appbrewery.com/random")
        res.render('index.ejs',{
            data:response.data
        })
    }catch(error){
        console.log(error)
    }
})
app.listen(port,()=>{
    console.log("Server is running fine.");
})