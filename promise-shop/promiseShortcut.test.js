
const testingShortcuts = require('./promiseShortcuts'); 


describe('SHORTCUTS', () =>{
    it('Testing the state of promise 2, The promise should be resolved with "VALUE 2"',() =>{
        return expect(testingShortcuts.promise2).resolves.toEqual('SECRET VALUE 2');
    })
    it('Testing the state of promise 3, The promise should be rejected with "VALUE 3"',() =>{
        return expect(testingShortcuts.promise3).rejects.toThrow('SECRET VALUE 3');
    })
    it('Testing the state of promise 1, The promise should throw an error',() =>{
        return expect(testingShortcuts.promise).rejects.toEqual('SECRET VALUE 1');
    })
});