function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();


function saludes(){
    return new Promise(resolve => {
    setTimeout(() => {
      resolve('chata care chimbo');
    }, 2000);
    });
}
async function saludesAsync(){
    console.log('Hola');
    const result = await saludes();
    console.log(result);
    const sapa = await saludo2();
    console.log(sapa);
};
 function saludo2(){
    setTimeout(() => {
        console.log('miguel papasito rico 👌😎');
    }, 3000);
}



saludesAsync();



















