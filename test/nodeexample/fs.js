const fs=require("fs")
const rs =fs.createReadStream("./test.txt")
rs.on("open",() => {
    console.log("the file is open")

});

rs.on("data", (data) =>{
    console.log(data.toString())
});