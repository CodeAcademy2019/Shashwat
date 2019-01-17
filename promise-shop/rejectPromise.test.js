const promiseReject = require('./rejectPromise')

    describe('PromiseReject: ', () =>{
        it('Should print "REJECTED!" on getting rejected',() =>{
            return expect(promiseReject).rejects.toThrow('REJECTED!');
        })
    });
    describe('promiseTest', () =>{
        it('Should fail because the promise is supposed to get rejected',() =>{
            return expect(promiseReject).resolves.toEqual('FULFILLED!');
        })
    });