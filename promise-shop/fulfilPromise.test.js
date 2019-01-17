//jest.useFakeTimers();

const promiseTest = require('./fulfilPromise');

    describe('promiseTest', () =>{
        it('Should print "FULFILLED" on resolving',() =>{
            return expect(promiseTest).resolves.toEqual('FULFILLED!');
        })
    });
    describe('promiseTest', () =>{
        it('Should fail because the promise is supposed to resolve',() =>{
            return expect(promiseTest).rejects.toMatch(undefined);
        })
    });

    
