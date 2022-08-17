class Usuario{
    constructor(id,nombre,edad){
        this._id = id;
        this._nombre = nombre;
        this._edad = edad;
    }
}
class Estudiante extends Usuario{
    constructor(id, nombre, edad, ficha, programa){
        super(id, nombre, edad);
        this._ficha = ficha;
        this._programa = programa;
    }
}
var e1=new Estudiante(111,"Julian Gei",18,2237756,"adsi");
var e2=new Estudiante(112,"Reyna Main",18,2237756,"adsi");

class Moto{
    constructor(placa,estudiante){
    this._placa = placa;
    this._estudiante = estudiante;
    }
}

// relacion TIENE-UN sencilla 

var m1=new Moto("ad-250",e1);
console.log(m1);

// Relacion TIENE -UN compuesta

class Grupo{
    constructor(codGrupo,estudiantes){
        this._codGrupo= codGrupo;
        this._estudiantes = estudiantes;
    }
    incorporarEstudiante(estudiante){
        this._estudiante.push(estudiante);
    }
}

var g1=[];
var grupo1=new Grupo(999,g1);
console.log(grupo1);
grupo1.incorporarEstudiante(e1);
grupo1.incorporarEstudiante(e2);
console.log(grupo1);