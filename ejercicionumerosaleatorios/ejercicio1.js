var Array=[];
user_in = prompt (parseInt("Ingrese un numero:"));

if(user_in <=4 || user_in >=21){
    alert ("Por favor digite un numero entre 5 y 20");
}else{while(Array.length < user_in){
    Array.push( math.floor(100*math.random()));
    console.log (Array);
}
}

var suma =0
for (var i=0; i<Array.length; i++){
    suma += Array[i];
}
documente.write ("La suma de los numeros es: "+ suma + "<br>");

var promedio= suma/user_in;
document.write ("El promedio es: " + promedio + "<br>");
