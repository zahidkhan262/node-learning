const http = require('http');
const server = http.createServer((req, res) => {

    res.writeHead(200,
        { 'Content-Type': 'text/html' });
    res.write("this is node js ")
    res.end("end program")
}).listen(4000, () => {
    console.log("server is live ")
})

