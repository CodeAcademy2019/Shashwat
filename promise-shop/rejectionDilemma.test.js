const rejectOrNotTo = require('./rejectionDilemma');

describe('To reject or not to: ', () =>{
    it('Should print "I DID NOT FIRE" on getting rejected (It should fail)',() =>{
        return expect(rejectOrNotTo).not.rejects.toThrow('I DID NOT FIRE');
    })
});
describe('To reject or not to', () =>{
    it('Should print "I FIRED" on getting resolved',() =>{
        return expect(rejectOrNotTo).resolves.toEqual('I FIRED');
    })
});
