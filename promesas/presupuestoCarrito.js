class Producto {
    constructor(nombre, precio, stock) {
        this._nombre = nombre;
        this._precio = precio;
        this._stock = stock;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    set precio(precio) {
        this._precio = precio;
    }
    set stock(stock) {
        this._stock = stock;
    }
    get nombre() {
        return this._nombre;
    }

    get precio() {
        return this._precio;
    }
    get stock() {
        return this._stock;
    }
}

var carrito=[];

const prod1 = new Productos('gucci', 600000, 15)
const prod2 = new Productos('moschino', 450000, 60)
const prod3 = new Productos('ray ban', 150000, 21)
const prod4 = new Productos('acliclas', 110000, 63)
const prod5 = new Productos('dolcce gabbana', 320000, 25)
const prod6=new Productos('acliclas', 320000, 26)


var presupuesto= 2000000;