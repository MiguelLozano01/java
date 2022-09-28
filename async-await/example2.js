// Llamar al .JSON

const data = require('./ejemplo.json');
// let data=fs.readFile('./ejemplo.JSON');

// Usar JSON.Parse para analizar los datos traidos
console.log(typeof data);

for (const key in data) {
    console.log(key);
}