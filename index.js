
// Simulador de   suma de items y listado de items

const items = [
      { nombre: "GPU", precio: 1000, disponibilidad: 20 },
     { nombre: "CPU", precio: 500, disponibilidad: 10 },
     { nombre: "RAM", precio: 100, disponibilidad: 5},
      { nombre: "Disco", precio: 100, disponibilidad: 0},
     ];



     const items2 = items.map( item => {
        item = {
            nombre: item.nombre,
            precio: item.precio,
            disponibilidad: item.disponibilidad
            }
             
        return item; 
     })
 console.log(items2);

const busquedaItems =  prompt("Ingrese el item  que desea ver");

const resultado = items.find( item => item.nombre.toLowerCase() === busquedaItems.toLowerCase());

if(resultado) {
 alert(`El Item solicitado:\nNombre: ${resultado.nombre}\nPrecio: ${resultado.precio}\nDisponibilidad ${resultado.disponibilidad} `)
 } else {
  alert("No se encontro el Item buscado")
 }