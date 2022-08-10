
//Notas
//0 y 20
// 20 y 40
// 40 y 60
// 60 y 80
// 80 y 100

function notas(n) {
    let nota = Math.round((Math.random()) * 100);
    if (nota >= 0 && nota < 20) {
        console.log(`Tu nota es: ${nota} Es una nota es muy baja`);
    } else if (nota >= 20 && nota < 40) {
        console.log(`Tu nota es: ${nota} Es una nota baja`);
    } else if (nota >= 40 && nota < 60) {
        console.log(
            `Tu nota es: ${nota} Es una nota media, es aceptable`);
    } else if (nota >= 60 && nota < 80) {
        console.log(`Tu nota es: ${nota} Es una nota buena`);
    } else if (nota >= 80 && nota < 99) {
        console.log(`Tu nota es: ${nota} Es una nota alta`);
    } else if (nota == 100) {
        console.log(`Tu nota es: ${nota}, Es la nota maxima`);
}
return nota;
}
console.log(notas());




const notaN=()=>{
    let nota = Math.round((Math.random()) * 100);
    if (nota >= 0 && nota < 20) {
        console.log(`Tu nota es: ${nota} Es una nota es muy baja`);
    } else if (nota >= 20 && nota < 40) {
        console.log(`Tu nota es: ${nota} Es una nota baja`);
    } else if (nota >= 40 && nota < 60) {
        console.log(
            `Tu nota es: ${nota} Es una nota media, es aceptable`);
    } else if (nota >= 60 && nota < 80) {
        console.log(`Tu nota es: ${nota} Es una nota buena`);
    } else if (nota >= 80 && nota < 99) {
        console.log(`Tu nota es: ${nota} Es una nota alta`);
    } else if (nota == 100) {
        console.log(`Tu nota es: ${nota}, Es la nota maxima`);
}
return nota;
}
console.log(notaN());