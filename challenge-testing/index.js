class CarritoCompra {
    constructor() {
        this.carrito = [];
    }
    agregarProducto({ nombre, value, cantidad }) {
        if (nombre.length > 0 && value > 0 && cantidad > 0) {
            this.carrito.push({ nombre, value, cantidad });
        }
        return "producto no valido";
    }
    calcularTotal() {
        let suma = 0;
        this.carrito.forEach(({ value, cantidad }) => {
            suma += value * cantidad;
        });
        return suma;
    }
    aplicarDescuento(porcentaje) {
        if (porcentaje > 0 && porcentaje < 100) {
            return this.calcularTotal();
        }
        return this.calcularTotal() - this.calcularTotal() * (porcentaje * (1 / 100));
    }
}

module.exports = CarritoCompra;
