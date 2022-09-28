function miAlmuerzo(receta) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Haciendo su receta: ${receta}`);
            resolve(receta);
        }, 1000);
    })
}
async function traerAlmuerzo() {
    setTimeout(() => {
        console.log(`Se puso la olla para: ${value}`);
    }, 2000);
}


// miAlmuerzo("Arroz con Leche")
// .then((value) =>{
//     setTimeout(() => {
//         console.log(`Se puso la olla para: ${value}`);
//     }, 2000);
//     return value;
// })
// .then((value) =>{
//     setTimeout(() => {
//         console.log(`Se agrego el arroz para: ${value}`);
//     },3000);
//     return value;
// })
// .then((value)=>{
//     setTimeout(() => {
//         console.log(`Agregando canela para: ${value}`);
//     }, 4000);
//     return value;
// })
// .then((value)=>{
//     setTimeout(() => {
//         console.log(`Agregando leche para: ${value}`);
//     },5000);
//     return value;
// })
// .then((value)=>{
//     setTimeout(() => {
//         console.log(`Agregando leche condensada para: ${value}`);
//     },6000);
//     return value;
// })
// .then((value)=>{
//     setTimeout(() => {
//         console.log(`Esperando la coccion final para: ${value}`);
//     },7000);
//     return value;
// })
// .then((value)=>{
//     setTimeout(() => {
//         console.log(`Su ${value} esta listo`);
//     },9000);
//     return value;
// })