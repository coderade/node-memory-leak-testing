const http = require('http');

let server = http.createServer((req, res) => {
    for (let i = 0; i < 1000; i++) {
        server.on('request', function leakyfunc() {
        });
    }

    res.end('Hello World\n');

}).listen(1337, '127.0.0.1');

server.setMaxListeners(0);

console.log('Server running at http://127.0.0.1:1337/. Process PID: ', process.pid);