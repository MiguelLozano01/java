function pruebaCallback(callback1, callback2, name) {
    callback1(name);
    setTimeout(()=> {
        console.log(`Adios ${name}`);
    }, 2000);
    callback2(name);
}

function saludo(nombre){
    console.log(`Hola ${nombre}`);
}
function cuentaLetras (nombre) {
    console.log(`Tu nombre tiene : "${nombre.length}" letras  `);
}

pruebaCallback(saludo, cuentaLetras, "ana");