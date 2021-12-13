const express =require("express");
const cors=require("cors");
const mongoose=require("mongoose");

const app=express();
 app.use(express.json());
 app.use(express.urlencoded());
 app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});
 //rectify
// mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB",{
//   useNewUrlParser:true,
//   useUnifiedTopology:true
// },()=>{
//   console.log("db connected");
// });

const userSchema= new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User=new mongoose.model("User", userSchema)

app.post("/login", (req,res)=>{
    const{email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if (user){
            if(password===user.password){
                res.send({message:"Login Successfully",user:user})
            }else{
                res.send({message:"Password did not match"})
            }
        }else {
            res.send({message:"User not registered"})
        }
    })
    // res.send({message"My API login")
})

app.post("/register", (req,res)=>{
    const{name,email,password}=req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            res.send({message:"User already registered"})
        }else{
            const user=new User({
                name,
                email,
                password
            })
            user.save(err=>{
                if (err){
                    res.send(err)
                }else {
                    res.send({message:"Successfully Registered, Please login now"})
                }
            })
        }
    })
})

// const mongoose = require('mongoose');
const MONGODB_URL = 'mongodb+srv://web-dev-project:web-dev-project@cluster0.zboy4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(MONGODB_URL);

app.listen(process.env.PORT || 4001);

// app.listen(9002,()=>{
//  console.log("be started at port 9002")
// })