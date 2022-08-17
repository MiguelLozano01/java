class Publicacion {
  constructor(titulo, precio) {
    this._titulo = titulo;
    this._precio = precio;
  }

  set titulo(titulo) {
    this._titulo = titulo;
  }
  get titulo() {
    return this._titulo;
  }
  set precio(precio) {
    this._precio = precio;
  }
  get precio() {
    return this._precio;
  }
}
let ob1 = new Publicacion("En tiempos de guerra", 30000);

class Libro extends Publicacion {
  constructor(titulo, precio, numPaginas) {
    super(titulo, precio);
    this._numPaginas = numPaginas;
  }
  set numPaginas(numPaginas) {
    this._precio = numPaginas;
  }
  get numPaginas() {
    return this._numPaginas;
  }
}

class DiscoCompacto extends Publicacion {
  constructor(titulo, precio, tReproduccion) {
    super(titulo, precio);
    this._tReproduccion = tReproduccion;
  }
  set tReproduccion(tReproduccion) {
    this._precio = tReproduccion;
  }
  get tReproduccion() {
    return this._tReproduccion;
  }
}

console.log(`El libro ${ob1.titulo} fue publicado`);

let libro1 = new Libro("100 años de soledad", 50000, 250);
console.log(`El libro ${libro1.titulo} cuesta: ${libro1.precio}`);

let audioL1 = new DiscoCompacto("crimen y misterio", 40000, "5 horas");
console.log(
  `El audio libro ${audioL1.titulo} cuesta: ${audioL1.precio} y dura ${audioL1.tReproduccion}`
);
