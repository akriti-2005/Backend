let express=require('express');
let app=express();
let path=require('path');
let bodyParser=require('body-parser');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/register',(req,res)=>{
    res.render('index');
});
// http://localhost/submit?uname=""&uid=""
app.get('/submit',(req,res)=>{
    console.log(req.query);
    res.send("user data recieved successfully");
})

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})