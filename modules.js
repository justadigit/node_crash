// const os = require('os');
// console.log(os.version);

const fs = require('fs');


// readFile
fs.readFile('./blog1.txt',(err,data)=>{
    if(err){
        console.log(err);
    }else{
        
        fs.writeFile('./blog2.txt',data.toString(),(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log(err);
            }
        })
    }
})
//wrirteFile
// fs.writeFile('./blog2.txt','hello',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }
// })
// fs.writeFile('./dd/blog3.txt','hello again',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }
// })