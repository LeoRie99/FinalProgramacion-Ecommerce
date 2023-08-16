// Función para mostrar los productos de una categoría específica
function mostrarCategoria(categoria) {
    // Primero, borro los productos actuales del divContenido
    divContenido.innerHTML = '';

    let imgWelcome = document.getElementById("banner"); // Obtengo el elemento img

switch(categoria) {
    case "Bebidas":
        imgWelcome.src = "images/bebidas.png";
        break;
    case "Snacks":
        imgWelcome.src = "images/snacks.png";
        break;
    case "Golosinas":
        imgWelcome.src = "images/golosinas.png";
        break;
    case "Comidas":
        imgWelcome.src = "images/comidas.png";
        break;
    case "Panaderia":
        imgWelcome.src = "images/panaderia.png";
        break;
}

    // Creo y agrego el botón para volver al listado completo
    let btnVolver = document.createElement("button");
    btnVolver.textContent = "Volver al listado";
    btnVolver.addEventListener('click', function() {
        volverMostrarProductos(categoria)
    });

    // Luego, obténgo los productos de la categoría específica
    let productosFiltrados = listaProductos.filter(producto => producto.categoria === categoria);

    // Finalmente, muestro los productos de esa categoría
    productosFiltrados.forEach(producto => {
        mostrarProducto(producto);
    });
      // Obtengo el descuento correspondiente a la categoría
      let descuento = obtenerDescuentoCategoria(categoria);

      // Creo y agrego el banner de promoción de descuento
      let banner = document.createElement("div");   
      banner.id = "bannerTemporal"
      banner.textContent = "¡Descuento del " + descuento + "% en " + categoria + "!";   
      banner.style.position = "fixed";  
      banner.style.fontWeight = "bold" 
      banner.style.top = "10px";   
      banner.style.left = "10px";   
      banner.style.backgroundColor = "yellow";   
      banner.style.borderRadius = "5px";   
      banner.style.boxShadow = "0px 1px 4px black";   
      banner.style.padding = "10px";   
      banner.style.display = "none"; // Lo oculto inicialmente   
       
      // Muestro el banner durante 10 segundos   
      banner.style.display = "block";   
      setTimeout(function() {   
          banner.style.display = "none";   
      }, 10000);   
    
      // Agrego el botón y el banner al main   
      divContenido.appendChild(btnVolver);   
      divContenido.appendChild(banner);   
}

function volverMostrarProductos() {
    // Borro los productos actuales del main
    divContenido.innerHTML = '';

    // Muestro todos los productos
    listaProductos.forEach(producto => {
        mostrarProducto(producto);
    });

    // Obtengo el elemento img
    let imgWelcome = document.getElementById("banner");
    // Cambio la imagen del banner a "banner2.png"
    imgWelcome.src = "images/catalogo.png";
}

function obtenerDescuentoCategoria(categoria) {
    // Devuelvo el descuento correspondiente a una categoría específica utilizando un objeto llamado  descuentos.  Este objeto tiene las categorías como claves y los descuentos como valores.
    let descuentos = {
        "Bebidas": 20,
        "Snacks": 15,
        "Golosinas": 10,
        "Comidas": 30,
        "Panaderia": 10
    };

    // Obtengo el descuento correspondiente a la categoría
    return descuentos[categoria];
}