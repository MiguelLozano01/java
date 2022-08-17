class Vehiculo{
    constructor(numSerie, marca, año, precio){
        this._numSerie = numSerie;
        this._marca = marca;
        this._año = año;
        this._precio = precio;
    }

    set numSerie(numSerie) {
        this._numSerie = numSerie;
    }
    get numSerie() {
        return this._numSerie;
    }
    set marca(marca) {
        this._marca = marca;
    }
    get marca() {
        return this._marca;
    }
    set año(año) {
        this.año = año;
    }
    get año() {
        return this.año;
    }
    set precio(precio) {
        this.precio = precio;
    }
    get precio() {
        return this.precio;
    }

}
class Autos extends Vehiculo{
    constructor(numSerieM, marca, año, precio, capacidadp){
        super(numSerieM, marca, año, precio);
        this._capacidadp = capacidadp;
    }

    set capacidadP(capacidadP) {
        this.capacidadP = capacidadP;
    }
    get capacidadP() {
        return this.capacidadP;
    }
}
class Vagoneta extends Vehiculo{
    constructor(numSerieM, marca, año, precio, capacidadp){
        super(numSerieM, marca, año, precio);
        this._capacidadp = capacidadp;
    }

    set capacidadP(capacidadP) {
        this.capacidadP = capacidadP;
    }
    get capacidadP() {
        return this.capacidadP;
    }
}

class Camioneta extends Vehiculo{
    constructor(numSerieM, marca, año, precio, pesoSoportado){
        super(numSerieM, marca, año, precio);
        this._pesoSoportado = pesoSoportado;
    }
}

let carro1 = new Autos("800cc", "Mitsubishi" , "2006", 50000, 4);

console.log(carro1.marca);