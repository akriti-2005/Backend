let http=require('http');

let server=http.createServer((req, res)=>{
    let header=req.headers.authorization;
    let secret="thisisnotasecret";

    if(!header){
        res.statusCode=400;
        res.write("kindly enter valid secret key first");
        res.end();
        return;
    }

    if(header==secret){
        res.statusCode=201;
        res.write("Welcome");
        res.end();
        return;
    }
    else{
        res.statusCode=401;
        res.write("Invalid user");
        res.end();
        return;
    }


    //res.statusCode=204;
   // res.statusCode=201;
//    console.log(req.headers);
//    console.log(res.headers);
//    res.write("http server");
//    res.end();
});

server.listen(3001,()=>{
   console.log("server running at port 3001");
});