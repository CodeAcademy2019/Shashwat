const errorHandling = require('./importantRule');

describe('catch', ()=> {
    it('should be able to catch error', () => {
        return errorHandling.promise.catch(errorPromise => {
            return expect(errorPromise).toEqual('OH NOES')
        });
    });    
});
describe('result array', ()=> {
    it('should give output in order of print to console', () => {
            return expect(errorHandling.result).toEqual([1, 2, 3, 4, 5,'OH NOES']);
    });    
});
describe('alwaysThrow()', ()=> {
    it('should throw error', () => {
        return expect(errorHandling.alwaysThrows).toThrowError('OH NOES');
    });
});
describe('iterate()', ()=> {
    it('should increment passed number', () => {
            return expect(errorHandling.iterate(1)).toEqual(2);
    });    
});