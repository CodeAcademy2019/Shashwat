const arraySum = require('./babySteps');

//Problem
describe('sumOfArray() :', () => {
  it('should display the sum of [0,0,0,-1] as -1', () => {
    process.argv[2] = [0, 0, 0, -1];
    expect(arraySum()).toEqual(-1);
  });
});

describe('sumOfArray() :', () => {
  it('should display the sum of [6, 5, 1] as 12', () => {
    expect(arraySum(6, 5, 1)).toEqual(12);
  });
});

describe('sumOfArray() :', () => {
  it('should display the sum of [-6, 5, 1] as 0', () => {
    expect(arraySum(-6, 5, 1)).toEqual(0);
  });
});