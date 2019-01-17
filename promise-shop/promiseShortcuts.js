var promise = new Promise(function (fulfill, reject) {
    reject('SECRET VALUE 1');
  });
promise.catch((err) =>{
    console.log('THERE IS AN ERROR!!!',err);
})

var promise2 = Promise.resolve('SECRET VALUE 2');

var promise3 = Promise.reject(new Error('SECRET VALUE 3'));

module.exports = {promise,promise2,promise3};