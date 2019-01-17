//jest.useFakeTimers();

const program = require('./fulfilPromise');

describe('Checking fulfilPromise()', ()=> {

    test('checking if promise is "FULFILLED!"', () => {
        expect.assertions(1);
        return expect(program()).resolves.toEqual('FULFILLED!');
    });
}); 

describe('Checking promises for at least a delay of', ()=> {
    jest.useFakeTimers();
    test('Testing if warmUp() calls setTimeout with 300 ms', () => {
        program()
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
    test('Testing if warmUp() does not call setTimeout in less than 250 ms', () => {
        program();
        expect(setTimeout).not.toHaveBeenLastCalledWith(expect.any(Function), 250);
    });
});
    
