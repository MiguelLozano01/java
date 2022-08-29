var arr=[]; 
var x = 6; 
var prom=0;
var numerad= 0;
var pote=0;
var sumaTotal = 0;
var desvia=0;
 
function desviacion(callback1, callback2, callback3, callback4, vector, tamaño){
    console.log("desviacion estandar del arreglo");
    callback1();
    callback2();
    callback3();
    callback4();
    tamaño=x;
    vector=arr;
};

function hacerArreglo(){
    setTimeout(() => {
        for (let i = 0; i < x; i++) {
        arr[i]= Math.round((Math.random())*100) 
        }
        console.log(`Los numeros del arreglo son ${arr}`);
    }, 1000);
}

function promedio() {
    setTimeout(() => {
        for (let i = 0; i < x; i++) {
           var sum = arr[i];
           sum += arr[i];
        }
        var prom;
        prom = sum/x;
        console.log(`promedio del arreglo ${prom}`);
    }, 2000);
}

function numerador() {
    setTimeout(() => {
        for (let i = 0; i < x; i++) {
            numerad=[i] - prom;
            pote= Math.pow(numerad, 2)
            sumaTotal += pote;
        }
        console.log(`El numerador es: ${numerad}`);
    }, 3000);
}

function radicar() {
    setTimeout(() => {
        desvia= Math.sqrt(sumaTotal/x)
        console.log(`La desviacion estandar es: ${desvia}`);
    }, 4000);
    
}
desviacion(promedio,  numerador, radicar, hacerArreglo, arr, x );
      