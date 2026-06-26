const express=require("express");//Importing express
const { compose } = require("node:stream");
const app=express();    //Initalization express with app
// Array of objects
let students=[
    {id:1,name:"Nirmal",city:"Gorakhpur"},
    {id:2,name:"Sachin",city:"GKP"},
    
];
app.use(express.json());
app.get("/",(req,res)=>{
    res.send("API is running");
});
app.get("/students",(req,res)=>{
    res.json({
        message:"All Students",
        data:students
    });
});

// For server start
app.listen(3000,()=>{
    console.log("Server started");
});
