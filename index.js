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
// Data Retrieve
app.get("/students",(req,res)=>{
    res.json({
        message:"All Students",
        data:students
    });
});
// Data Store
app.post("/students",(req,res)=>{
    const {id,name,city}=req.body;
    const newStudent={id,name,city};
    students.push(newStudent);
    res.json({
        message:"Record Added",
        student:newStudent,
        data:students
    });

});

// Data update
app.put("/students/:id",(req,res)=>{
    // First method
    // const id =req.params.id;

    // Second method
    const {id}=req.params;
    const student=students.find(s=>s.id==id);
    if(!student)
    {
        return res.status(404).json({
            message:"Student Not Found"
        });
    }
    student.name=req.body.name;
    student.city=req.body.city;
    res.json({
        message:"Record Updated",
        student
    });

});
// Data Delet
app.delete("/students/:id",(req,res)=>{
    const id=req.params.id;
    const student=students.find(s=>s.id==id);
    if(!student)
    {
        return reqs.status(404).json({message:"Invalid ID"});
    }
    students=students.filter(s=>s.id!=id);
    res.json({
        message:"Record deleted",
        students
    });
});

// For server start
app.listen(3000,()=>{
    console.log("Server started");
});
