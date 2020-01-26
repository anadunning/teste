const http = require('http');

http.createServer(function (req, res) {
	res.write('Hello, World!');
	res.end();
}).listen(9090);

console.log('Server started! Listening on port 9090. Port 8080 is already busy.');
