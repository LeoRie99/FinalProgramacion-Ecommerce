function mostrarResumenCompra() {
  // Creo elementos para el resumen de compra
  let contenedor = document.createElement("div");
  contenedor.id = "contenedor"
  let resumenCompra = document.createElement("div");
  resumenCompra.id = "resumen-compra";
let h2 = document.createElement("h2")
  h2.textContent = "Resumen de Compra"
  resumenCompra.appendChild(h2)
  // Muestro los productos agregados al carrito
  for (let producto of carrito) {
    let divProducto = document.createElement("div");
    divProducto.className = "producto-resumen";

    let img = document.createElement("img");
    img.src = producto.imagenProducto;
    img.className = "img-producto-resumen";

    let nombre = document.createElement("p");
    nombre.textContent = producto.nombreProducto;

    let precio = document.createElement("p");
    precio.textContent = "Precio: $" + producto.precioProducto;

    let cantidad = document.createElement("p");
    cantidad.textContent = "Cantidad: " + producto.cantidad;

    let subtotal = document.createElement("p");
    subtotal.textContent = "Subtotal: $" + (producto.precioProducto * producto.cantidad);

    divProducto.append(img, nombre, precio, cantidad, subtotal);
    resumenCompra.appendChild( divProducto);
  }
 
// Muestro el total de la compra 
let total = document.createElement("p"); 
total.textContent = "Total: $" + calcularTotal(); 
resumenCompra.appendChild(total); 

 
// Creo el formulario de compra 
let formularioCompra = document.createElement("form"); 
formularioCompra.id = "formulario-compra"; 
let h2Form = document.createElement("h2") 
h2Form.textContent = "Formulario de Compra" 

let nombreCompleto = document.createElement("input"); 
nombreCompleto.type = "text"; 
nombreCompleto.placeholder = "Nombre completo"; 


let telefono = document.createElement("input"); 
telefono.type = "text"; 
telefono.placeholder = "Teléfono"; 


let email = document.createElement("input"); 
email.type = "email"; 
email.placeholder = "Email"; 

let lugarEntrega = document.createElement("input"); 
lugarEntrega.type = "text"; 
lugarEntrega.placeholder = "Lugar de entrega"; 

let fechaEntrega = document.createElement("input"); 
fechaEntrega.type = "date";  

let metodoPago = document.createElement("select"); 
let elegirOpcion = document.createElement("option"); 
elegirOpcion.value = "pago"; 
elegirOpcion.textContent = "Elegir Metodo de pago"; 
let opcionDebito = document.createElement("option"); 
opcionDebito.value = "debito"; 
opcionDebito.textContent = "Débito"; 
let opcionCredito = document.createElement("option"); 
opcionCredito.value = "credito"; 
opcionCredito.textContent = "Crédito"; 
metodoPago.append(elegirOpcion, opcionDebito, opcionCredito);  

let cantidadCuotas = document.createElement("input"); 
cantidadCuotas.type = "number"; 
cantidadCuotas.placeholder = "Cantidad de cuotas"; 
cantidadCuotas.style.display = "none"; // Oculto el campo de cantidad de cuotas por defecto 
metodoPago.addEventListener("change", function() { 
  if (metodoPago.value === "credito") { 
    cantidadCuotas.style.display = "block"; // Muestro el campo de cantidad de cuotas si se selecciona crédito 
  } else { 
    cantidadCuotas.style.display = "none"; // Oculto el campo de cantidad de cuotas si se selecciona débito 
  } 
}); 


  let btnConfirmarCompra = document.createElement("button");
  btnConfirmarCompra.textContent = "Confirmar compra";
  btnConfirmarCompra.addEventListener("click", function() {
  
  });

  formularioCompra.append(h2Form, nombreCompleto, telefono, email, lugarEntrega, fechaEntrega, metodoPago, cantidadCuotas, btnConfirmarCompra)


  let btnCancelar = document.createElement("button")
  btnCancelar.textContent = "Cancelar Compra"
  btnCancelar.id = "btnCancelar"
  btnCancelar.addEventListener("click", function(){
    contenidoHeader();
    let imgWelcome = document.createElement("img")
    imgWelcome.src = "images/banner2.png";
    imgWelcome.id = "banner";
    imgWelcome.alt = "Banner Welcome";
    main.appendChild(imgWelcome)
    contenedor.innerHTML = ''
    volverMostrarProductos()
  })
  // Agrego el resumen de compra, el formulario y el boton para Cancelar Compra al main
  
  contenedor.append(resumenCompra, formularioCompra, btnCancelar);
  main.appendChild(contenedor)
}

function calcularTotal() {
  let total = 0; 
  carrito.forEach(function(producto) { 
  total += producto.precioProducto * producto.cantidad; 
  });
  return total;
  }