const promiseChain = require('./promiseAfterPromise');

describe('Promise Chaining', () =>{
    it('Should print "I DID NOT FIRE" on getting rejected (It should fail)',() =>{
        return expect(promiseChain.promise1).not.rejects.toThrow('I DID NOT FIRE');
    });
    it('Should print "I DID NOT FIRE" on getting rejected (It should fail)',() =>{
        return expect(promiseChain.promise2).not.rejects.toThrow('I DID NOT FIRE');
    });
});
describe('Promise Chaining', () =>{
    it('Should print "I FIRED" on getting resolved',() =>{
        return expect(promiseChain.promise1).resolves.toEqual('I FIRED');
    });
    it('Should print "I FIRED" on getting resolved',() =>{
        return expect(promiseChain.promise2).resolves.toEqual('I FIRED');
    });
});