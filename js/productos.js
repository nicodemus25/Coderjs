const container = document.querySelector("#productos");
const carritoElemento = document.querySelector("#carrito");

const productosCarritos = []
let indexCarro =  []
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];



async function agregarProductos()
{
    const respuesta = await fetch("./productos.json")
    const datos = await respuesta.json()
        productosCarritos.push(...datos) 
        await cargarSandwich()
        await asignarClicks()
       
    }
    
    
    
    function cargarSandwich()
    {
        let cartas = ""
        console.log(cartas);
        productosCarritos.forEach(element => {cartas += templateSandwich(element)})
       container.innerHTML = cartas;
    }


function templateSandwich(sandwiches)
{
    return `<div class="card" style="width: 18rem;">
    <img class="card-img-top" src="..." alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${sandwiches.nombre}</h5>
      <p class="card-text">${sandwiches.desc}</p>
      <p class="card-text">${sandwiches.precio}$</p>
      <button id="${sandwiches.id}" class="btn btn-primary comprar">Comprar</button>
    </div>
  </div>` 
         
}

function asignarClicks(){
    
    const botones = document.querySelectorAll(".btn.btn-primary.comprar")
    
    botones.forEach(boton => 
        {
            boton.addEventListener("click", ()=> 
    {
        let resultado = productosCarritos.find(sand => sand.id === parseInt(boton.id))
        if(resultado !== undefined)
        {
            agregarAlCarrito(resultado)
            Toastify({

                text: "Agregado al carrito",
                
                duration: 3000
                
                }).showToast();
            guardarCarrito(indexCarro);
        }
    }
                                                    )
                            }
    
    )

    function agregarAlCarrito(prod)
    {
        let nuevoProd = {desc: prod.desc, id: prod.id, nombre: prod.nombre, cantidad : 1, precio : prod.precio}
        let posicion = indexCarro.findIndex(producto=> producto.nombre === prod.nombre)
        if(posicion !== -1){
            indexCarro[posicion].cantidad++
         
        }
        else{
    
            indexCarro.push(nuevoProd)
        }
    
    
    }

}
agregarProductos()
    























