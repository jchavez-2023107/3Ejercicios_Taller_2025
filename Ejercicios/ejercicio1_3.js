// Definimos el inventario con productos
const inventario = [
    { id: 1, nombre: "Monitor", precio: 3000, stock: 5 },
    { id: 2, nombre: "Teclado Mecánico", precio: 80, stock: 10 },
    { id: 3, nombre: "Silla Gamer", precio: 2500, stock: 3 }
];

// Función para listar productos en el inventario
function listarInventario() {
    console.log("\nInventario disponible:");
    inventario.forEach(producto => {
        console.log(`ID: ${producto.id}, Nombre: ${producto.nombre}, Precio: $${producto.precio}, En Stock: ${producto.stock}`);
    });
}

// Función para buscar un producto por ID
function buscarProducto(id) {
    const producto = inventario.find(prod => prod.id === id);
    if (producto) {
        console.log(`\nProducto encontrado: ${producto.nombre}, Precio: $${producto.precio}, Stock: ${producto.stock}`);
    } else {
        console.log("\nProducto no encontrado.");
    }
}

// Función para realizar una compra
function comprarProducto(id, cantidad) {
    const producto = inventario.find(prod => prod.id === id);
    
    if (!producto) {
        console.log("\nError: Producto no encontrado.");
        return;
    }

    if (producto.stock >= cantidad) {
        producto.stock -= cantidad;
        const costoTotal = cantidad * producto.precio;
        console.log(`\nCompra exitosa: ${cantidad} x ${producto.nombre} por un total de: $${costoTotal}`);
        console.log(`Stock restante de ${producto.nombre}: ${producto.stock}`);
    } else {
        console.log(`\nError: No hay suficiente stock de ${producto.nombre}. Stock disponible: ${producto.stock}`);
    }
}

// Función para calcular el valor total del inventario
function calcularValorInventario() {
    let valorTotal = inventario.reduce((total, prod) => total + (prod.precio * prod.stock), 0);
    console.log(`\nValor total del inventario: $${valorTotal}`);
}

// Ejecución de las funciones
listarInventario();
buscarProducto(2);
comprarProducto(2, 3);
calcularValorInventario();
