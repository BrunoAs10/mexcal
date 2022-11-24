const stockProductos = [
    {
        id: 1,
        nombre: "Crash Bandicoot",
        cantidad: 1,
        precio: 1200,
        img: "imagenes/chiles.jpg",
      },
      {
        id: 2,
        nombre: "Mortal Kombat X",
        cantidad: 1,
        precio: 1500,
        img: "imagenes/nachos.jpg",
      },
      {
        id: 3,
        nombre: "Pac Man",
        cantidad: 1,
        precio: 1570,
        img: "imagenes/tabasco.jpg",
      },
      {
        id: 4,
        nombre: "Dragon Ball Xenoverse",
        cantidad: 1,
        precio: 1000,
        img: "imagenes/tortillaburrito.jpg",
      },
      {
        id: 5,
        nombre: "Naruto Ninja Storm 4",
        cantidad: 1,
        precio: 1200,
        img: "imagenes/valentina.jpg",
      },
      {
        id: 6,
        nombre: "Shingeki Final Attack",
        cantidad: 1,
        precio: 1200,
        img: "imagenes/tortilla maiz.jpg",
      },
      {
        id: 7,
        nombre: "League of Legends",
        cantidad: 1,
        precio: 1400,
        img: "imagenes/chiles.jpg",
      },
      {
        id: 8,
        nombre: "Call Of Duty Warzone",
        cantidad: 1,
        precio: 1200,
        img: "imagenes/chiles.jpg",
      },
      {
        id: 9,
        nombre: "Fifa 2019",
        cantidad: 12,
        precio: 1400,
        img: "imagenes/chiles.jpg",
      },
      {
        id: 10,
        nombre: "Fornite",
        precio: 1200,
        img: "imagenes/chiles.jpg",
      }
];     

let carrito = [] 

const catalogo = document.getElementById('contenedor')

stockProductos.forEach((prod) => {
    const {id, nombre, precio, cantidad, img} = prod
    catalogo.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img class="card-img-top mt-2" src="${img}" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">Precio: ${precio}</p>
      <p class="card-text">Cantidad: ${cantidad}</p>
      <button class="btn btn-primary" onclick="agregarProducto(${id})">Agregar Producto</button>
    </div>
  </div>
    `;


})

function agregarProducto(id) {
    const item = stockProductos.find((prod) => prod.id === id)
    carrito.push(item)
    mostrarCarrito()
}

const mostrarCarrito = () => {
    const modalBody = document.querySelector('.modal .modal-body');
    
    modalBody.innerHTML = ''
    
    carrito.forEach((prod) => {
        const {id, img, nombre, precio, cantidad} = prod
        modalBody.innerHTML += `
        <div class="modal-contenedor">
        <div>
        <img class="img-fluid img-carrito" src=${img}"/>
        </div>

        <div>
        <p>Producto: ${nombre}</p>
        <p>Precio: ${precio}</p>
        <p>Cantidad: ${cantidad}</p>

        <button onclick="eliminarProducto(${id}) class="btn btn-danger>Eliminar Producto</button>

        `
        
    })
}

