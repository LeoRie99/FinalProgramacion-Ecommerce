// MOSTRAR LISTA DE PRODUCTOS 
function contenidoHeader() {
let btnCarrito = document.createElement("button"); 
btnCarrito.id = "btnCarrito";
let img = document.createElement("img"); 
img.src = "images/carrito.png"; 
img.alt = "Icono del carrito de compras"; 
btnCarrito.appendChild(img); 
let cantidadCarrito = document.createElement("span");
cantidadCarrito.id = "cantidadCarrito";
// cantidadCarrito.textContent = carrito.length;
cantidadCarrito.style.display = "none";
btnCarrito.appendChild(cantidadCarrito);
btnCarrito.addEventListener('click', function () { 
  if (carrito.length > 0) {
  mostrarCarrito(); 
  }
}); 
 
let nav = document.createElement("nav"); 
let ul = document.createElement("ul"); 
 
let categorias = ["Bebidas", "Snacks", "Golosinas", "Comidas", "Panaderia"] 
 
categorias.forEach(categoria => { 
  let li = document.createElement("li"); 
  let btnCategoria = document.createElement("a"); 
  btnCategoria.href =  `#${categoria} ` 
  btnCategoria.id = `categoria-${categoria}`
  btnCategoria.textContent = categoria; 
  li.appendChild(btnCategoria); 
  ul.appendChild(li); 
 
  // Creo el evento de click 
  btnCategoria.addEventListener('click', function(event) { 
    event.preventDefault(); // Prevengo la acción por defecto del enlace 
    mostrarCategoria(categoria); // Llamo a la función mostrarCategoria con la categoría correspondiente 
  }); 
}); 
nav.appendChild(ul); 
header.append(nav, btnCarrito);   
}



let divContenido = document.createElement("div");
divContenido.id = "contenido"

function mostrarProducto(producto) { 
  // Creo los elementos HTML 
  let div = document.createElement("div"); 
  let h2 = document.createElement("h2"); 
  let img = document.createElement("img"); 
  let p = document.createElement("p"); 
  let span = document.createElement("span"); 
  let btn = document.createElement("button"); 
 
  // Asigno los valores a los elementos 
  div.id = "productoContainer"; 
  h2.textContent = producto.nombreProducto; 
  img.src = producto.imagenProducto; 
  p.textContent = producto.descripcionProducto; 
  span.textContent = "$" + '' + producto.precioProducto; 
  btn.textContent = "Agregar al Carrito"; 
 
  btn.addEventListener('click', function() { 
    agregarCarrito(producto); 
    actualizarCantidadCarrito();
  }); 
 
  // Agrego los elementos al div 
  div.append(img, h2, p, span, btn); 
  divContenido.append(div); 
  main.append(divContenido); 
} 
 
function actualizarCantidadCarrito() {
  let totalProductos = 0;
  carrito.forEach(producto => {
    totalProductos += producto.cantidad;
  });
  cantidadCarrito.textContent = totalProductos;
  if (totalProductos > 0) {
    cantidadCarrito.style.display = "inline";
  } else {
    cantidadCarrito.style.display = "none";
  }
}