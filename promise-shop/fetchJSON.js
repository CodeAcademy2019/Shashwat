const http = require("q-io/http");
const path = 'http://localhost:1337';
http.read(path).then(result => JSON.parse(result)).then(console.log);