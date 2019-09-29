const http = require('http')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  //res.end('Hello World\n');
  res.end(sum(3).toString());
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

var numbers = [1,2,3,4,56,69];

function sum(n){
	var summ = 0;
	for (var i = 0; i <= n-1; i++) {
		summ += numbers[i];
	}
	return summ;
}