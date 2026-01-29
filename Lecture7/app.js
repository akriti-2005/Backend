let express=require('express');

let app=express();

__dirname

app.get('/',(req,res)=>{
    res.send("this is  / route");
});

app.listen(8000,()=>{
    console.log("app is running at port 8000");
});

app.get("/login",(req, res)=>{
    res.send("this is / login route");
});

app.get('/signup',(req,res)=>{
    res.render("index");
});

// app.get("/#",(req, res)=>{
//     res.send("something went wrong! Invalid Url");
// })

app.get("/register",(req, res)=>{
    res.send("this is / register route");
});