let express=require('express');
let bodyParser=require('body-parser');// it is a middleware iske liye app.use likhte hain

let app=express();

let path=require('path');

app.set('view engine',"ejs");

app.set("views",path.join(__dirname,'views'));

app.use(bodyParser.urlencoded({extended:true}));


let obj={
    id:1212
}

let todos=[
    "coding",
    "sleeping",
    "eating"
];

let arr=[1,2 ,3, 4,5];
app.get('/i',(req,res)=>{
    res.render('id',{arr});
})


app.get('/todos',(req,res)=>{
    res.render('idx',{todos});
    //res.send("this is a todo route")

})

app.get('/register',()=>{
    res.render('register');
})

app.post('/register',(req,res)=>{
    console.log(req.body);
    res.send("user registered successfully");
})



app.get('/',(req,res)=>{
    //res.send("this is a / route");
    res.render('index',{obj});
})

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})