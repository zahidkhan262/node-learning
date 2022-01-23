const http = require('http');
const os = require('os');
console.log(os.totalmem)

// const hostname = '127.0.0.1';
// const port = '4000';

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("this is node js ")
    res.end("end program")
}).listen(4000)


console.log("hello")
