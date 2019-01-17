let result = [];
const alwaysThrows = () => {
    throw Error('OH NOES');
}
const iterate = (integer) => {
    console.log(integer);
    result.push(integer);
    return integer+1;
}

const promise = Promise.resolve(iterate(1))
                        .then(iterate)
                        .then(iterate)
                        .then(iterate)
                        .then(iterate)
                        .then(alwaysThrows)
                        .then(iterate)
                        .then(iterate)
                        .then(iterate)
                        .then(iterate)
                        .then(iterate)
                        .catch((error)=> {
                            result.push('OH NOES');
                            console.log(error.message)
                        });

module.exports = {promise,iterate,alwaysThrows,result};