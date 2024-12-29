const productosPana= [
    {
        nombre: "Croissant",
        descripcion: "un sabor distinto",
        imagen: "assest/image/croissant.jpg",
        precio: 800
    },
    {
        nombre: "Baguette",
        descripcion: "un sabor distinto",
        imagen: "assest/image/baguette.jpg",
        precio: 800 
    },
    {
        nombre: "Pan de campo",
        descripcion: "un sabor distinto",
        imagen: "assest/image/croissant.jpg",
        precio: 700
    },
    {
        nombre: "Pain at chocolate",
        descripcion: "un sabor distinto",
        imagen: "assest/image/painChocolat.jpg",
        precio: 900
    },
    {
        nombre: "Bizcochitos de grasa",
        descripcion: "un sabor distinto",
        imagen: "assest/image/bizcochos.jpg",
        precio: 1000
    },
    {
        nombre: "Churros",
        descripcion: "un sabor distinto",
        imagen: "assest/image/churros.jpg",
        precio: 350
    },
    {
        nombre: "Cookies",
        descripcion: "un sabor distinto",
        imagen: "assest/image/cookies.jpg",
        precio: 550
    }
];

//console.log(productosPana[1])

let panaderia = "";

for(let indice = 0; indice < productosPana.length; indice++){
    panaderia += `
                <div class="pana">
                    <h3>${productosPana[indice].nombre}</h3>
                    <img src="${productosPana[indice].imagen}">
                    <p>${productosPana[indice].descripcion}</p>
                    <p>$${productosPana[indice].precio} c/u</p>
                    <input class= botonAgregar type="button" value="agregar al carrito">
                </div>
    `;
};
//console.log(panaderia)
const contenedorProductos = document.getElementById("ventas");
//console.log(contenedorProductos)
contenedorProductos.innerHTML = panaderia;
//console.log(contenedorProductos)

const botonesAgregar = document.querySelectorAll(".botonAgregar");

const listaCarrito = document.querySelector(".carritoCompras ul");

const totalCarrito = document.querySelector(".carritoCompras p");

const mensajePagarCarrito = document.getElementById("mensajeCarrito");

let totalAPagar = 0;

 
for(let indice = 0; indice < botonesAgregar.length; indice++){
    
    function agregarElemCarrito(){
        
        const elementoLi = document.createElement("li");

        elementoLi.innerText = `${productosPana[indice].nombre} $${productosPana[indice].precio} `;

        listaCarrito.appendChild(elementoLi);

        totalAPagar += productosPana[indice].precio;

        totalCarrito.innerText = "Total a Pagar: $" + totalAPagar;

        mensajePagarCarrito.innerText = "";
    };

    botonesAgregar[indice].addEventListener("click", agregarElemCarrito) 
};

const botonBorrar = document.querySelector("#botonBorrar");

function borrarCarrito(){

    listaCarrito.innerHTML = "";

    totalCarrito.innerHTML = "Total a Pagar: $0";

    totalAPagar = 0;

    mensajePagarCarrito.innerText = "";
}

botonBorrar.addEventListener("click", borrarCarrito)

const botonPagar = document.querySelector("#botonPagar")

function irPagar(){
    
    if(listaCarrito.innerText === ""){
        mensajePagarCarrito.innerText = "No has seleccionado ningun producto"
    }else {
        mensajePagarCarrito.innerText = "Ya puede pagar"
    }
};

botonPagar.addEventListener("click", irPagar);

