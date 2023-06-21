const http = require("http");  //require(package/module name)
const currentDateTime= require("./myFirstModule")
const uc = require("upper-case")

http
.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    const message = uc.upperCase("hello world !")
    res.end(message+ " "+currentDateTime.myDateTime());
})
.listen(8080);
console.log('app running on port 8080');

