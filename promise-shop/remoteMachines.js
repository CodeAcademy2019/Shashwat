const http = require("q-io/http");
const source = 'http://localhost:7000';
const readJson = http.read(source).then(result => JSON.parse(result)).then((result1) =>{
console.log(result1);
return result1;
});
module.exports = readJson;