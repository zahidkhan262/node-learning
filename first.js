const http = require('http');

http.createServer((req, res) => {
    res.write("hi this is first node program")

    res.end("server is live...");
}).listen(4000);
