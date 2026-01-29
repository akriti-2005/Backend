// querry params

let express= require('express');

let app=express();

app.get('/product/:id',(req,res)=>{
    console.log(req.params);
    res.send("this is a product route");
});

app.get('/todo/:id',(req,res)=>{
    console.log(req.params.id);
    res.send("this is a todo route");
});

app.listen(3000,()=>{
    console.log("app is running at port 3000");
});