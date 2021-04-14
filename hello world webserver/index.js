/*const express = require('express');
var app = express();

app.get('/', function (req, res) {
	res.send('Hello world');
});

app.listen(3000, function () {
	console.log('listen port 3000');
})
*/

var http = require('http');

http.createServer(
	function (req, res) {
		res.writeHead(200, { 'Content-type': 'text/plain' });
		res.write('hello world');
		res.end();
	}
).listen(3000);
console.log('origin test');


