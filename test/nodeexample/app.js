const http = require("http");  //require(package/module name)
const currentDateTime= require("./myFirstModule")

http
.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello world!'+ " "+currentDateTime.myDateTime());
})
.listen(8080);
console.log('app running on port 8080');