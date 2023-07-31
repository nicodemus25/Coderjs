
// calculadora de precios

let calculadora = 0;

let precios = [];

let precioEstimado = parseInt(prompt("Indique el precio"));

let precioTotal = 0
console.log(precios);

precios.push(precioEstimado);

console.log(precios);

let preciofinal = parseInt(prompt("Indique el precio"));

 precios.push(preciofinal);

 console.log(precios);

 const total = precios.reduce((acumulador, elemento) => acumulador + elemento, 0)

 alert("el precio final es " + total);