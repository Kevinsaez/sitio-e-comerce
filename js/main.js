const productosArray = [
    {
        idProducto: "biela-01",
        tituloProducto: "biela 01",
        imagen: "./img/biela.jpg",
        categoria: {
            id: "motor",
            nombre: "motor"
        },
        precio: 2000
    },
    {
        idProducto: "piston-01",
        tituloProducto: "piston 01",
        imagen: "./img/piston.jpg",
        categoria: {
            id: "transmision",
            nombre: "transmision"
        },
        precio: 1000
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.tituloProducto}">
        <div class="detalle-producto">
            <h3 class="titulo-producto">${producto.tituloProducto}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.idProducto}">Agregar al carrito</button>
        </div>
        `;
        contenedorProductos.append(div);
    })
}

cargarProductos(productosArray);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoBoton = productosArray.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productoBoton);
        } else {
            cargarProductos(productosArray);
        }
    })
})