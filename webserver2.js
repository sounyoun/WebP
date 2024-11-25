const http = require('http');
const fs = require('fs');

const server = http.createServer();


server.on('request', (req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    const filename = "week2.html";
    fs.readFile(filename, (err, data) => {
        res.write(data);
        res.end();
    });
});

server.listen(500);