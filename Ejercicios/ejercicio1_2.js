// Definimos el carrito con productos
const carrito = [
    { nombre: "Laptop", precio: 12000, cantidad: 27 },
    { nombre: "Mouse", precio: 25, cantidad: 30 },
    { nombre: "Teclado holográfico", precio: 5000, cantidad: 27 }
];

// Calculamos el total por producto y el costo total del carrito
let costoTotal = 0;

console.log("Lista de productos en el carrito:");
carrito.forEach(producto => {
    const totalProducto = producto.precio * producto.cantidad;
    console.log(`- ${producto.nombre}: ${producto.cantidad} x $${producto.precio} = $${totalProducto}`);
    costoTotal += totalProducto;
});

console.log(`\nCosto total del carrito: $${costoTotal}`);
