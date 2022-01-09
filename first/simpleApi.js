const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });


    res.write(JSON.stringify({ name: 'zahidkhan', age: 22, salary: 'ckhan490@gmail.com' }));

    res.end();
}).listen(4000, () => {
    console.log("server is live....")
})