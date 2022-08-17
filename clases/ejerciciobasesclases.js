class Poligono {
  constructor(lados, base, altura) {
    this._lados = lados;
    this._base = base;
    this._altura = altura;
  }
  set lados(lados) {
    this._lados = lados;
  }
  set base(base) {
    this._base = base;
  }
  set altura(altura) {
    this._altura = altura;
  }
  get lados() {
    return this._lados;
  }
  get base() {
    return this._base;
  }
  get altura() {
    return this._altura;
  }
  area() {}
  perimetro() {}
}

class Cuadrado extends Poligono {
  constructor(lados, base, altura) {
    super(lados, base, altura);
  }

  area() {
    var areaCua = this._base * this._altura;
    return areaCua;
  }
  perimetro() {
    var perim = this._lados * this._lados;
    return perim;
  }
}
var obj2 = new Cuadrado(2, 2, 6);
console.log(`El perimetro es ${obj2.perimetro()}`);
console.log(`El area es ${obj2.area()}`);

class Triangulo extends Poligono {
  constructor(lados, base, altura) {
    super(lados, base, altura);
  }

  area() {
    var areaT = (this._base * this._altura) / 2;
    return areaT;
  }

  perimetro() {
    var perT = this._lados * 3
    return perT;
  }
}
var obj3 = new Triangulo(5,2,3)
console.log(`El area es ${obj3.area()}`);
console.log(`El area es ${obj3.perimetro()}`);

class Rectangulo extends Poligono {
    constructor(lados, base, altura)

    

}
