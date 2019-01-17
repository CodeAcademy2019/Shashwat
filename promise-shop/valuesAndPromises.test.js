const valuesAndPromises = require('./valuesAndPromises');

describe('Promises wrapping values', () =>{
    it('valuesAndPromises function should output DR. MANHATTAN',() =>{
        return expect(valuesAndPromises).resolves.toEqual('DR. MANHATTAN');
    });
    it('This test case must fail, if state is not rejected',() =>{
        return expect(valuesAndPromises).rejects.toEqual(undefined);
    });
});
