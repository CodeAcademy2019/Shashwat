const arraySum = require('./babySteps');

describe('sumOfArray() :', () => {
  it('should display the sum of [0,0,0,-1] as -5', () => {
    process.argv = ['', '', 0, 0, 0, -5];
    expect(arraySum()).toEqual(-5);
  });
  it('should display the sum of [6, 5, 1] as 12', () => {
    process.argv = ['', '', 6, 5, 1];
    expect(arraySum()).toEqual(12);
  });
  it('should display the sum of [-6, 5, 1] as 0', () => {
    process.argv = ['', '', -6, 5, 1];
    expect(arraySum()).toEqual(0);
  });
});
