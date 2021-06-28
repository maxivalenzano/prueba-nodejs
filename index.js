const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


var calculator = require('./app/calculator');

var a = 3;
var b = 5;

var result = `Multiplicacion ${a} + ${b} = ${calculator.multiply(a,b)}`

//console.log(`Suma ${a} + ${b} = ${calculator.add(a,b)}`);
//console.log(`Resta ${a} + ${b} = ${calculator.minus(a,b)}`);
console.log(`Multiplicacion ${a} + ${b} = ${calculator.multiply(a,b)}`);
//console.log(`Division ${a} + ${b} = ${calculator.divide(a,b)}`);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(result);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});