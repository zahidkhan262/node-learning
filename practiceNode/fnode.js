const http = require('http');

const hostname = '127.0.0.1';
const port = '3030';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end("end program");

});

server.listen(hostname, port, () => {
    console.log(`server is live ${hostname}: ${port}`)
})