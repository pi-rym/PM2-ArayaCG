const CarritoCompra = require("../index");
const prueba = new CarritoCompra();
//constructor(): Inicializa el carrito como un array vacío.
test("Debe inicializar el carrito con un array vacío", () => {
    expect(prueba.carrito.length).toBe(0);
});

//agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.
test("Recibe un objeto y lo agrega al carrito", () => {
    prueba.agregarProducto({ nombre: "Leche", value: 100 });
    expect(prueba.carrito.length).toBe(1);
    expect(typeof prueba.carrito).toBe("object");
    expect(prueba.carrito[0].nombre).toBe("Leche");
    expect(prueba.carrito[0].nombre.length).toBeGreaterThan(0);
    expect(typeof prueba.carrito[0].nombre).toBe("string");
    expect(prueba.carrito[0].value).toBe(100);
    expect(prueba.carrito[0].value).toBeGreaterThan(0);
    expect(typeof prueba.carrito[0].value).toBe("number");
});
//agregar producto que tenga valor negativo
test("Recibo un precio negativo", () => {
    prueba.agregarProducto({ nombre: "Pan", value: -50 });
    expect(prueba.carrito.length).toBe(1);
})

//calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.
test("Calcula el total de los precios del carrito", () => {
    expect(prueba.calcularTotal()).toBe(100);
    expect(prueba.carrito.length).toBeGreaterThan(0);
});

//aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado.
test("aplica descuento según el valor especificado", () => {
    expect(prueba.aplicarDescuento(10)).toBe(90);
    expect(prueba.aplicarDescuento(110)).toBe(prueba.calcularTotal());
    expect(prueba.aplicarDescuento(-10)).toBe(prueba.calcularTotal());
});
