const multiplePromise = require('./multiPromises');
const getPromise1 = Promise.resolve('Hi ');
const getPromise2 = Promise.resolve('Shashwat');

describe('multiPromise: ', () => {
    it('Checking if both the promises gets resolved', () => {
        return expect(multiplePromise.all(getPromise1,getPromise2)).resolves.toEqual(['Hi ','Shashwat']);
    });
    
    it('Testing for promise getting rejected', () => {
        return expect(multiplePromise.all(getPromise1,getPromise2)).not.rejects;
    });
});