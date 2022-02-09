let fileSystem = require("fs");
let http = require('http');

// let data = fileSystem.readFileSync("first.txt");
// console.log("data :", data.toString());
// console.log("program end")

// o/p=> data this is zahid khan....

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'plain/text' })
    res.write("this is my page")
    res.end("program end")
}).listen(5000)

fileSystem.readFile("first.txt", function (error, data) {
    if (error) {
        console.log("error", error)
    } else {
        console.log("data:", data.toString());
        console.log("program end")
    }
})


