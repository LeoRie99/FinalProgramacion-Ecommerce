function mostrarCarrito() {
  // Creo elementos para el modal
  let modal = document.createElement("div");
  let modalContent = document.createElement("div");
  let closeBtn = document.createElement("button");

  // Asigno clases para el diseño CSS
  modal.id = "myModal";
  modal.className = "modal";
  modalContent.className = "modal-content";
  closeBtn.className = "close";

  // Agrego texto al botón de cierre
  closeBtn.textContent = "x";

  // Agrego función de cierre al botón
  closeBtn.onclick = function() {
    modal.style.display = "none";
  };

  let h2 = document.createElement("h2");
  h2.id = "carrito-title";

  let img = document.createElement("img");
  img.src = "images/carrito52Black.png";
  img.alt = "Icono del carrito de compras";

  h2.appendChild(img);
  modalContent.appendChild(h2);

  // Agrego productos al carrito
  for (let producto of carrito) {
    let div = document.createElement("div");
    div.className = "producto-carrito";

    let img = document.createElement("img");
    img.src = producto.imagenProducto;
    img.className = "img-producto-carrito";

    let nombre = document.createElement("p");
    nombre.textContent = producto.nombreProducto;

    let precio = document.createElement("p");
    precio.textContent = "Precio:" + ' ' + "$" + producto.precioProducto;

    let cantidad = document.createElement("span");
    cantidad.textContent = "Cantidad :" + ' ' + producto.cantidad;

    let subtotal = document.createElement("p");
    subtotal.textContent = "Subtotal: $" + (producto.precioProducto * producto.cantidad);

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener('click', function() {
      // Elimina el producto del carrito
      eliminarProducto(producto);

      // Elimina el producto del modal
      div.remove();

      // Actualiza el total
      pTotal.textContent = "Total: $" + calcularTotal();
      actualizarCantidadCarrito();
    });

    let btnAgregar = document.createElement("button");
    btnAgregar.textContent = "+";
    btnAgregar.addEventListener('click', function() {
      // Encuentra el producto en el carrito
      let productoCarrito = carrito.find(item => item.idProducto === producto.idProducto);

      // Si el producto se encuentra en el carrito, incrementa su cantidad
      productoCarrito.cantidad += 1;
      cantidad.textContent = "Cantidad :" + ' ' + productoCarrito.cantidad;
      subtotal.textContent = "Subtotal: $" + (productoCarrito.precioProducto * productoCarrito.cantidad);
      actualizarCantidadCarrito();
      // Actualiza el total
      pTotal.textContent = "Total: $" + calcularTotal();     
    });

    let btnRestar = document.createElement("button");
    btnRestar.textContent = "-";
    btnRestar.addEventListener('click', function() {
      // Encuentra el producto en el carrito
      let productoCarrito = carrito.find(item => item.idProducto === producto.idProducto);

      // Si el producto se encuentra en el carrito y su cantidad es mayor que 1, decrementa su cantidad
      if (productoCarrito.cantidad > 1) {
        productoCarrito.cantidad -= 1;
        cantidad.textContent = "Cantidad :" + ' ' + productoCarrito.cantidad;
        subtotal.textContent = "Subtotal: $" + (productoCarrito.precioProducto * productoCarrito.cantidad);
        pTotal.textContent = "Total: $" + calcularTotal();
      }
      // Si la cantidad es 1, elimina el producto
      else if (productoCarrito.cantidad === 1) {
        eliminarProducto(producto);
        div.remove();
        pTotal.textContent = "Total: $" + calcularTotal();
      }
      actualizarCantidadCarrito();
    });

    div.append(img, nombre, precio, cantidad, subtotal, btnEliminar, btnAgregar, btnRestar);
    modalContent.appendChild(div);
  }

  function calcularTotal() {
    let total = 0;
    carrito.forEach(function(producto) {
      total += producto.precioProducto * producto.cantidad;
    });
    return total;
  }

  let btnCheckout = document.createElement("button");
  btnCheckout.textContent = "Continuar con la compra";
  btnCheckout.id = "checkout-btn";
  btnCheckout.addEventListener('click', function() {  
    if (carrito.length > 0) {
    modal.style.display = "none";
    let nav = document.querySelector("nav")
    nav.style.display = "none";
    let btnCarrito = document.getElementById("btnCarrito");
    btnCarrito.style.display = "none";
    main.innerHTML = '';
    mostrarResumenCompra(); 
    }
  });

  let modalFooter = document.createElement("div");
  modalFooter.className = "modal-footer";
  let pTotal = document.createElement("p");
  pTotal.textContent = "Total: $" + calcularTotal();
  modalFooter.append(pTotal, btnCheckout);
  modalContent.append(modalFooter);

  modalContent.append(closeBtn);
  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Muestro el modal
  modal.style.display = "block";
}

function eliminarProducto(producto) {
  // Encuentra el índice del producto en el array carrito
  let index = carrito.findIndex(item => item.idProducto === producto.idProducto);

  // Si el producto se encuentra en el carrito, lo elimina
  if (index !== -1) {
    carrito.splice(index, 1);
  }
}