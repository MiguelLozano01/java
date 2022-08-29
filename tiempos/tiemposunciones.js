// Funcion para agregar numeros aleatorio dentro de un arreglo settimeout

function numerosAleatorios() {
    var vector = [];
    for (let i = 0; i < 25; i++) {
        vector[i]=Math.round((Math.random())*(25-5)+5);
    }
    console.log(vector);
}

function numeroUno(){
    var num=[];
    for (let i = 0; i < 3; i++) {
        num[i]=1;
    }
    return num;
}
setTimeout(numerosAleatorios,3000);

console.log(numeroUno());

//mision: por que cambia la impresion con let y con var

for (let i = 1; i < 10; i++) {
    setTimeout(()=>{
        console.log(i);
    },(1000*i)
    );
}
setInterval(() => {
    console.log(`Amo el sena`);
}, 1000);

let timerId = setInterval(() => {
    console.log(`tick`);
}, 2000);

setTimeout(() => {
    clearInterval(timerId);
},5000);

//Un arreglo que se llene aleatoriamente con 15 elementos se imprima infinitamente


setInterval(() => {
    let vec=[];
    for (let i = 1; i < 15; i++) {
        vec[i]=Math.round((Math.random())*100);
        setTimeout(()=>{
            console.log(vec[i]);
        });
    }
}, (1000));
//OPERADORES TERNARIOS
var vec = [];
for (let i = 0; i < 25; i++) {
    vec[i]=Math.round((Math.random())*100);
}
var k=0;

setInterval(() => {
    console.log(vec[k]);
    k++;
    k==10?k=0:k=k;
}, 1000);

setInterval(() => {
    console.log("Puñaladas por loca");
}, 2000);

