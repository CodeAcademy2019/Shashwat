const filterFile = require('./directoryFilterModule');

const dir = process.argv[2];
const ext = process.argv[3];
filterFile(dir, ext, (err, data) => {
  if (err) {
    return console.log(err);
  }
  data.forEach((element) => {
    console.log(element);
  });
});
