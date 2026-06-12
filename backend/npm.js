//events
const EventEmitter=require('events');
const event=new EventEmitter();
const os=require('os')
const fs=require('fs')
const path=require('path')
const http=require('http')

const p="https://jsonplaceholder.typicode.com/users"
console.log(path.dirname(p));
console.log(p.split("/"));
console.log(path.basename(p))

const server=http.createServer((req,res)=>{
    if(req.url=="/home") {
        res.write("Home Page");
        res.end();
        
    }
    else if(req.url=="/about"){
        res.write("About Page");
        res.end();
    }
    else if(req.url=="/contact"){
        res.write("Conatct Page");
        res.end();
    }
    else{
res.write("DashBoard")
res.end();
    }
})
server.listen(3000,()=>{
    console.log("Server running at 3000")
})

fs.mkdir("f1",(err)=>{
    console.log(err);

fs.writeFile("f1/file.txt","cvr",(err)=>{
    console.log(err);
})
})

fs.readFile("f1/file.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("file content",data);
    }
})
fs.appendFile("f1/file.txt","hi",(err)=>{
    if(err){
      throw err;
    }
})

fs.unlink("f1/file.txt",(err)=>{
    if(err) throw err;
})



console.log(os.platform())
console.log(os.release())
console.log(os.arch())
console.log(os.type())
console.log(os.tmpdir())
console.log(os.homedir())
console.log(os.networkInterfaces())
console.log(os.getPriority())
console.log(os.freemem())
1
event.on("hello",()=>{
    console.log("hello world");
})
function greet(){
    console.log("greeting from CVR ");
}
event.addListener("hi",greet);
event.on("hi",greet);
event.emit("hi");
event.emit("hello");
console.log(event.getMaxListeners());
console.log(event.setMaxListeners(5));
console.log(event.getMaxListeners());
console.log(event.eventNames());
console.log(event.listenerCount("hello"))



