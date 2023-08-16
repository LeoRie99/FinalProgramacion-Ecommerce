// Creo el header y el main 
let header = document.createElement("header"); 
let h1 = document.createElement("h1"); 
let text = "Mi E-commerce";
for (let i = 0; i < text.length; i++) {
    let span = document.createElement("span");
    span.id = `letra-${text[i]}`
    span.textContent = text[i];
    h1.appendChild(span);
}

// Agregar espacio entre "Mi" y "Kiosquito"
let space = document.createElement("span");
space.style.marginRight = "0.6em";
h1.insertBefore(space, h1.childNodes[2]);

let btnVerCatalogo = document.createElement("button")
btnVerCatalogo.textContent = "Ver catalogo"
btnVerCatalogo.id = "btn-catalogo"
btnVerCatalogo.addEventListener("click", function(){
    main.innerHTML = '';
    btnVerCatalogo.style.display = "none"
    contenidoHeader();
    let imgWelcome = document.createElement("img")
    imgWelcome.src = "images/catalogo.png";
    imgWelcome.id = "banner";
    imgWelcome.alt = "Banner Catalogo";
    main.appendChild(imgWelcome)

    listaProductos.forEach(producto => { 
        mostrarProducto(producto); 
      });
})
document.body.append(header); 

header.append(h1, btnVerCatalogo); 
 
let main = document.createElement("main"); 

let div = document.createElement("div")
div.id = "container";

let imgWelcome = document.createElement("img")
imgWelcome.src = "images/banner2.png";
imgWelcome.id = "welcome";
imgWelcome.alt = "Welcome";

let img = document.createElement("img")
img.src = "images/banner.png";
img.id = "descuento";
img.alt = "Descuentos y promociones";


div.append(imgWelcome, img);
main.append(div)

let footer = document.createElement("footer")

let pAlmuno = document.createElement("p")
pAlmuno.textContent = "Alfredo Leonel Portillo"

let pEmail = document.createElement("p")
pEmail.textContent = "alfredo.portillo@davinci.edu.ar"

footer.append(pAlmuno, pEmail)

document.body.append(header, main, footer); 