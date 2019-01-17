jest.useFakeTimers();

const program = require('./warmUp');

describe('Checking warmUp()', ()=> {
    test('Testing if warmUp() calls setTimeout with 300 ms', () => {
        program.warmUp();
        expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300);
    });
    test('Testing if warmUp() does not call setTimeout in less than 250 ms', () => {
        program.warmUp();
        expect(setTimeout).not.toHaveBeenLastCalledWith(expect.any(Function), 250);
    });
});

describe('print()', ()=> {
    test('checking if print() prints "TIMED OUT!"', () => {
        expect(program.print()).toEqual('TIMED OUT!');
    });
});
