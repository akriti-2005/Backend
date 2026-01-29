let express=require('express');

let ejs=require('ejs');

const path=require('path');
let app =express();
app.set("view engine","ejs");
app.set('Render',path.join(__dirname,'Render'));
app.get('/',(req,res)=>{
    res.send("this is / route");
    res.render("index");
});

app.listen(3000,()=>{
    console.log("port is running at port 3000");
});