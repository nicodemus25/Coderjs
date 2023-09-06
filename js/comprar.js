const carritoCheckout = recuperarCarrito() || [];
const sandwiches = [];

function guardarCarrito(carrito) {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function recuperarCarrito() {
  return JSON.parse(localStorage.getItem("carrito"));
}

class Comprar {
  constructor(carrito, documento) {
    this.carrito = carrito;
    this.documento = documento;
  }

  totalDelCarrito() {
    let valor = 0;
    if (shopping.carrito.length !== 0) {
      valor = shopping.carrito.reduce(
        (acc, item) => acc + item.precio * item.cantidad,
        0
      );
    }

    let templateDinero = `<h2>La cantidad de dinero a abonar es de: ${valor} $</h2>`;

    total.innerHTML = templateDinero;
  }

  async confirmarCompra() {
    botonFinalizar.addEventListener("click", function () {
      if (shopping.carrito.length !== 0) {
        Swal.fire({
          title: "Esta seguro que desea confirmar la compra?",

          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Si, Comprar!",
        }).then((result) => {
          if (result.isConfirmed) {
            localStorage.removeItem("carrito");
            Swal.fire({
              title: "Custom width, padding, color, background.",
              width: 600,
              padding: "3em",
              color: "#716add",
              background: "#fff url /images/trees.png",
              backdrop: `
                              rgba(0,0,123,0.4)
                              url"/images/nyan-cat.gif"
                              left top
                              no-repeat
                            `,
            });
            shopping.carrito = [];
            location.href = shopping.documento;
          } else {
            Swal.fire({
              title: "Por favor Continue con su compra. nyan",
              width: 600,
              padding: "3em",
              color: "#716add",
              background: "#fff url(/images/trees.png)",
              backdrop: `
                              rgba(0,0,123,0.4)
                              url("/images/nyan-cat.gif")
                              left top
                              no-repeat
                            `,
            });
          }
        });
      } else{
        Swal.fire({
            title: "Tiene que haber productos. OwO",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff url(/images/trees.png)",
            backdrop: `
                            rgba(0,0,123,0.4)
                            url("/images/nyan-cat.gif")
                            left top
                            no-repeat
                          `,
          });
      }
      {
      }
    } 
    
    ) 

    
  }
}

async function obtenerDatos() {
  const respuesta = await fetch("js/productos.json");
  const datos = await respuesta.json();
  sandwiches.push(...datos);
}

const shopping = new Comprar(carritoCheckout, "./index.html");

const tablera = document.querySelector("tbody");
const total = document.querySelector("H2");
const botonFinalizar = document.querySelector("#finalizar");
const noProd = document.querySelector("#SinProd");

async function verCarrito(array) {
  if (array.length === 0) {
    let tabla = "No hay productos seleccionados!";
    noProd.innerHTML = tabla;
  } else {
    let tabla =
      "<tr><td>Imagen</td><td>Nombre</td><td>Descripcion</td><td>Precio</td><td>Cantidad</td></tr>";
    if (array.length > 0) {
      array.forEach((sand) => {
        tabla += armarHTML(sand);
      });
      tablera.innerHTML = tabla;
    }
  }
}

function armarHTML(x) {
  return ` 
  <tr>
    <td><img src="${x.img}"</div></td>
    <td>${x.nombre}</td>
    <td>${x.desc}</td>
    <td>${x.precio} $</td>
    <td>${x.cantidad}</td>
   
</tr>
`;
}

obtenerDatos();
verCarrito(shopping.carrito);

shopping.totalDelCarrito();
shopping.confirmarCompra();
