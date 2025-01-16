// Ejercicio 1.1
const producto = {
    nombre: "Asistente virtual para servicios electrodomésticos llamado <<Alejito>>",
    precio: 11500,
    disponible: true
};

// Muestra la información del producto en la consola
console.log("Producto");
console.log(`Nombre: ${producto.nombre}`);
console.log(`Precio: $${producto.precio}`);
console.log(`Disponible: ${producto.disponible ? "Sí" : "No"}`);

// Calcula el precio con un descuento del 10%
const descuento = 0.1; // 10%
const precioConDescuento = producto.precio - (producto.precio * descuento);
console.log(`Precio con descuento del 10%: Q${precioConDescuento.toFixed(2)}`);
