const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


var calculator = require('./app/calculator');

var a = 3;
var b = 5;

var result = `Multiplicacion ${a} + ${b} = ${calculator.multiply(a,b)}`

//console.log(`Suma ${a} + ${b} = ${calculator.add(a,b)}`);
//console.log(`Resta ${a} + ${b} = ${calculator.minus(a,b)}`);
console.log(`Multiplicacion ${a} + ${b} = ${calculator.multiply(a,b)}`);
//console.log(`Division ${a} + ${b} = ${calculator.divide(a,b)}`);

app.get('/', (req, res) => {
    res.send(result)
  })
  
  app.listen(port, () => {
    console.log(`Example app listening at http://prueba-github-ingsw.herokuapp.com:${port}`)
  })