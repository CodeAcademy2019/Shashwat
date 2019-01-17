const asyncPromiseTest = require('./async');

describe('Promise is always asynchronous ', () =>{
    it('tests FOR PROMISE being FULFILLED',() =>{
        return expect(asyncPromiseTest).resolves.toEqual('PROMISE VALUE');
    })
});

