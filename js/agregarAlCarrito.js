let carrito = [];

function agregarCarrito(producto) {
    // Verifico si el producto ya existe en el carrito
    let productoExistente = carrito.find(item => item.idProducto === producto.idProducto);
    
    if (productoExistente) {
      // Actualizo la cantidad del producto existente
      productoExistente.cantidad += 1;
      
    } else {
      // Agrego el producto al carrito
      producto.cantidad = 1;
      carrito.push(producto);
      
    }
console.table(carrito);
  }

 