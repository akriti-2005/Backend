let express=require('express');
let app=express();
let path=require('path');

let bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine",'ejs');
app.set('views',path.join(__dirname,'views'));

app.post('/register',(req,res)=>{
    console.log(req.body);
    res.render("user register successfully");
})

app.get('/register',(req,res)=>{
    res.render('index');
})

app.listen(3000,()=>{
    console.log("app is running on port 3000");
})