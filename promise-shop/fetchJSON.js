const http = require("q-io/http");
//const path = 'http://localhost:1337';
const source = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
const readJson = http.read(source).then(result => JSON.parse(result)).then((result1) =>{
console.log(result1);
return result1;
});
module.exports = readJson;