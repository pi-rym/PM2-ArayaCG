class CarritoCompra {
    constructor() {
        this.carrito = [];
    }
    agregarProducto({ nombre, value }) {
        if (nombre.length > 0 && value > 0) {
            this.carrito.push(new Producto(nombre, value));
        }
        return "producto no valido";
    }
    calcularTotal() {
        let suma = 0;
        this.carrito.forEach(({ value }) => {
            suma += value;
        });
        return suma;
    }
    aplicarDescuento(porcentaje) {
        if (porcentaje >= 100 || porcentaje <= 0) {
            return this.calcularTotal();
        }
        let descuento = this.calcularTotal() * (porcentaje * (1 / 100));
        return this.calcularTotal() - descuento;
    }
}

class Producto {
    constructor(nombre, value) {
        this.nombre = nombre;
        this.value = value;
    }
}

module.exports = CarritoCompra;
