const http = require('http');

// const hostname = '127.0.0.1';
// const port = '3070';

const server = http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end("end program")
});

server.listen(6000)
console.log("hello")
