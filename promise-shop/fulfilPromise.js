
const fulfil = (fulfill, reject) => {
  setTimeout( () => 
  fulfill('FULFILLED!'),300);
};
const fulfilPromise = new Promise(fulfil);
fulfilPromise.then(console.log, null);
module.exports = fulfilPromise; 
