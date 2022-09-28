
let prom = new Promise(function (resolve, reject) {
    let x = 1;
    resolve(x)

})
    .then(value => {
        let y = setInterval(() => console.log(++value), 1000);
        setTimeout(() => {
            clearInterval(y);
        }, 10000);
        return value;
    })

    .then(value => {
        console.log(value);
    });
// *********************************************************

let prom2 = new Promise(function (resolve, reject) {
    let x = 1;
    resolve(x)
})
    .then(x => {
        console.log(x);
        return ++x;
    })

    .then(value => {
        console.log(value);
    })
