//hacer una funcion para la coccion de arroz

function cocinarArroz(callback1, callback2, callback3, callback4, callback5, callback6, callback7){
    callback1();
    callback2();
    callback3();
    callback4();
    callback5();
    callback6();
    setTimeout(() => {
        console.log("El arroz con leche esta listo puede servirlo")
    }, 7000);
}
function ponerArroz() {
    setTimeout(() => {
        console.log("El arroz esta en el fogon con agua")
    }, 1000);
}

function agregarCanela () {
    setTimeout(() => {
        console.log("Canela agregada exitosamente");
    }, 2000);
}


function esperarCoccion() {
    setTimeout(() => {
        console.log("El arroz se seco");
    }, 3000);
}

function agregarLeche(){
    setTimeout(() => {
        console.log("Medio litro de leche agregada");
    }, 4000);
}

function agregarLechecondensada(){
    setTimeout(() => {
        console.log("la leche condensada ah sido agregada");
    }, 5000);
}

function esperarEspesor() {
    setTimeout(() => {
        console.log("Se espeso el arroz")
    }, 6000);
}

cocinarArroz(ponerArroz,agregarCanela, esperarCoccion, agregarLeche,agregarLechecondensada, esperarEspesor );