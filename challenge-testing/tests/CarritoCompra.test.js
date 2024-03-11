const CarritoCompra = require("../index");

//Agrupo el conjuntos de pruebas relacionadas al carrito compra
describe("CarritoCompra", () => {
    let prueba;
    //se utiliza para crear una nueva instancia de CarritoCompra antes de cada prueba, asegurando que cada prueba comience con un estado limpio y predecible.
    beforeEach(() => {
        prueba = new CarritoCompra();
    });
    //constructor(): Inicializa el carrito como un array vacío.
    test("Inicializa el carrito como un array vacío", () => {
        expect(prueba.carrito).toEqual([]);
    });
    //agregarProducto(producto): .
    test("Agrega un objeto representando un producto al carrito", () => {
        prueba.agregarProducto({ nombre: "Leche", value: 100 });
        expect(prueba.carrito.length).toBe(1);
        expect(typeof prueba.carrito[0].nombre).toBe("string");
        expect(typeof prueba.carrito[0].value).toBe("number");
        expect(prueba.carrito[0].nombre).toBe("Leche");
        expect(prueba.carrito[0].value).toBe(100);
    });
    //agregar producto que tenga valor negativo
    test("agregarProducto que tenga valor negativo", () => {
        prueba.agregarProducto({ nombre: "Pan", value: -50 });
        expect(prueba.carrito.length).toBe(0);
    });
    //calcularTotal():
    test("Calcula el total de la compra sumando los precios de todos los productos en el carrito", () => {
        prueba.agregarProducto({ nombre: "Leche", value: 100 });
        prueba.agregarProducto({ nombre: "Pan", value: 50 });
        expect(prueba.calcularTotal()).toBe(150);
    });
    //aplicarDescuento(porcentaje):
    test("Aplica un descuento al total de la compra según el porcentaje especificado", () => {
        prueba.agregarProducto({ nombre: "Leche", value: 100 });
        prueba.agregarProducto({ nombre: "Pan", value: 50 });
        expect(prueba.aplicarDescuento(10)).toBe(135);
        expect(prueba.aplicarDescuento(110)).toBe(prueba.calcularTotal());
        expect(prueba.aplicarDescuento(-10)).toBe(prueba.calcularTotal());
    });
});
