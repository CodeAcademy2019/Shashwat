const http = require('http');
const map = require('through2-map');

const httpUpperCase = () => {
  const port = process.argv[2];
  const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
      req.pipe(map((data) => {
        return data.toString().toUpperCase();
      })).pipe(res);
    } else {
      res.end('Post request not received');
    }
  });
  server.listen(port);
};
httpUpperCase();
module.exports = httpUpperCase;


// http.createServer((req, res) => {
//   if (req.method === 'POST') {
//     let incomingString = '';
//     req.on('data', (incomingData) => {
//       incomingString += incomingData;
//     });
//     let responseString;
//     req.on('end', () => {
//       responseString = incomingString.toUpperCase();
//       res.writeHead(200, { 'Content-Type': 'text/plain' });
//       res.end(responseString);
//     });
//   } else {
//     res.end(`<!doctype html>
//   <html>
//   <body>
//       <form action="/" method="post">
//           <input type="text" name="fname" /><br />
//           <button>Save</button>
//       </form>
//   </body>
//   </html>`);
//   }
// }).listen(4037);
