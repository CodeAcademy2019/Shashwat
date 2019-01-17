const promise1 = first();
const promise2 = promise1.then((valueFromFirst) => second(valueFromFirst));
promise2.then(console.log);

module.exports = {promise1,promise2};