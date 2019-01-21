const fs = require('fs');
const path = require('path');

let callback = (data) => {
  console.log(data);
  return data;
};
const filterNamewithExt = (list, extension) => {
  return list.filter(word => path.extname(word) === '.'.concat(extension));
};
const filteredLs = (callback) => {
  fs.readdir(process.argv[2], (err, items) => {
    if (err) {
      return callback('Path Not Found');
    }
    callback(filterNamewithExt(items, process.argv[3]));
  });
};
module.exports = { filteredLs, filterNamewithExt };
