
// CREARMOS UNA PLANTILLA PARA DESPUES CREAR LOS OBJETOS

class Producto {
    constructor(id, imagen, nombre, descripcion, precio, categoria){
               this.idProducto = id,
               this.imagenProducto = imagen,
               this.nombreProducto = nombre,
               this.descripcionProducto = descripcion,
               this.precioProducto = precio,
               this.categoria = categoria
    }
}

// CREAMOS LOS PRODUCTOS

// BEBIDAS
let coca = new Producto (
    'A1',
    'images/coca.jpg',
    'CocaCola',
    'CocaCola 1,5lt',
    500, 
    'Bebidas'
);
let agua = new Producto(
    'A2',
    'images/agua.jpg',
    'Agua Mineral',
    'Agua Mineral 1,5lt',
    150,
    'Bebidas'
    );
let sprite = new Producto(
    'A3',
    'images/sprite.jpg',
    'Sprite',
    'Sprite 1,5lt',
    300,
    'Bebidas'
    );
let levite = new Producto(
    'A4',
    'images/levite.jpg',
    'Levite',
    'Levite 1,5lt',
    400,
    'Bebidas'
    );

// SNACK
let doritos = new Producto(
    'B1',
    'images/doritos.jpg',
    'Doritos',
    'Snack Doritos queso',
    300,
    'Snacks'
);
let cheetos = new Producto(
    'B2',
    'images/cheetos.jpg',
    'Cheetos',
    'Snack Cheetos queso',
    300,
    'Snacks'
);
let lays = new Producto(
    'B3',
    'images/lays.jpg',
    'Lays',
    'Papas Lays Clasicas',
    450,
    'Snacks'
);
let twistos = new Producto(
    'B4',
    'images/twistos.jpg',
    'Twistos',
    'Twistos Jamon',
    450,
    'Snacks'
);

// GOLASINAS
let jorgito = new Producto(
    'C1',
    'images/jorgito.jpg',
    'Jorgito',
    'Alfajor Jorgito',
    150,
    'Golosinas'
);
let kitKat = new Producto(
    'C2',
    'images/kitkat.jpg',
    'KitKat',
    'Chocolate KitKat',
    200,
    'Golosinas'
);
let mogul = new Producto(
    'C3',
    'images/mogul.jpg',
    'Gomitas Mogul',
    'Gomitas frutales Mogul',
    100,
    'Golosinas'
);
let cofler = new Producto(
    'C4',
    'images/cofler.jpg',
    'Chocolate Cofler',
    'Chocolate Cofler con Maní',
    300,
    'Golosinas'
);

// COMIDAS
let empanada = new Producto(
    'D1',
    'images/empanada.jpg',
    'Empanada',
    'Empanada de pollo',
    150,
    'Comidas'
);
let hamburguesa = new Producto(
    'D2',
    'images/hamburguesa.jpg',
    'Hamburguesa',
    'Hamburguesa Completa',
    400,
    'Comidas'
);
let tarta = new Producto(
    'D3',
    'images/tarta.jpg',
    'Tarta',
    'Tarta de pollo',
    300,
    'Comidas'
);
let pizza = new Producto(
    'D4',
    'images/pizza.jpg',
    'Pizza',
    'Mozzarella',
    1000,
    'Comidas'
);

// PANADERIA
let panSalvado = new Producto(
    'E1',
    'images/panSalvado.jpg',
    'Pan de Salvado',
    'Pan Salvado Lactal',
    500,
    'Panaderia'
);
let panBlanco = new Producto(
    'E2',
    'images/panBlanco.jpg',
    'Pan Blanco',
    'Pan banclo Lactal',
    500,
    'Panaderia'
);
let panIntegral = new Producto(
    'E3',
    'images/panIntegral.jpg',
    'Pan Integral',
    'Pan integral Bimbo',
    500,
    'Panaderia'
);
let panArabe = new Producto(
    'E4',
    'images/panArabe.jpg',
    'Pan Arabe',
    'Pan Tipo Arabe Bimbo',
    500,
    'Panaderia'
);

let listaProductos = [];
listaProductos.push(
    coca,
    doritos,
    jorgito,
    empanada,
    panSalvado,
    agua,
    cheetos,
    kitKat,
    hamburguesa,
    panBlanco,
    sprite,
    lays,
    mogul,
    tarta,
    panIntegral,
    levite,
    twistos,
    cofler,
    pizza,
    panArabe,
    )

