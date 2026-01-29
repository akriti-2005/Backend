let fs=  require('fs');

let path=__dirname+'/data.txt';

fs.writeFile(path,"learning node js fs writeFile",(err)=>{
    if(err)
    console.log(err);
    else
    console.log("Done");
})

//console.log(__dirname);