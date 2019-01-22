const { typeOfFrame, valueOfFrame, valueOfLastFrame, score } = require('./assignment');

describe('typeOfFrame :', () => {
  it('should display the frame type as strike', () => {
    expect(typeOfFrame(10, 0)).toEqual('strike');
  });
  it('should display the frame type as strike', () => {
    expect(typeOfFrame(10, 10)).toEqual('strike');
  });
  it('should display the frame type as spare', () => {
    expect(typeOfFrame(0, 10)).toEqual('spare');
  });
  it('should display the frame type as spare', () => {
    expect(typeOfFrame(5, 5)).toEqual('spare');
  });
  it('should display the frame type as open', () => {
    expect(typeOfFrame(5, 1)).toEqual('open');
  });
  it('should display the frame type as open', () => {
    expect(typeOfFrame(9, 0)).toEqual('open');
  });
  it('should display the frame type as does not match any type', () => {
    expect(typeOfFrame(9, 3)).toEqual('does not match any type');
  });
});
describe('valueOfFrame() , score earned in current frame: ', () => {
  it('should display 10', () => {
    const input = [10, 0, 0];
    const output = 10;
    expect(valueOfFrame(input, 0)).toEqual(output);
  });
  it('should display 20', () => {
    const input = [10, 5, 5, 10];
    const output = 20;
    expect(valueOfFrame(input, 0)).toEqual(output);
  });
  it('should display 25', () => {
    const input = [10, 10, 2, 3];
    const output = 25;
    expect(valueOfFrame(input, 0)).toEqual(output);
  });
  it('should display 15', () => {
    const input = [3, 7, 5];
    const output = 15;
    expect(valueOfFrame(input, 0)).toEqual(output);
  });
  it('should display 20', () => {
    const input = [3, 7, 10];
    const output = 20;
    expect(valueOfFrame(input, 0)).toEqual(output);
  });
  it('should display 9', () => {
    const input = [4, 5, 9];
    const output = 9;
    expect(valueOfFrame(input, 0)).toEqual(output);
  });
});

describe('valueOfLastFrame() , score earned in last frame: ', () => {
  it('should display 30', () => {
    const input = [10, 10, 10];
    const output = 30;
    expect(valueOfLastFrame(input, 0)).toEqual(output);
  });
  it('should display 20', () => {
    const input = [10, 5, 5];
    const output = 20;
    expect(valueOfLastFrame(input, 0)).toEqual(output);
  });
  it('should display 25', () => {
    const input = [3, 7, 10];
    const output = 20;
    expect(valueOfLastFrame(input, 0)).toEqual(output);
  });
  it('should display 9', () => {
    const input = [4, 5];
    const output = 9;
    expect(valueOfLastFrame(input, 0)).toEqual(output);
  });
});

describe('score() , total Points earned in a game: ', () => {
  it('should display 90', () => {
    const input = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    const output = 90;
    expect(score(input)).toEqual(output);
  });
  it('should display 30', () => {
    const input = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
    const output = 30;
    expect(score(input)).toEqual(output);
  });
  it('should display 16', () => {
    const input = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const output = 16;
    expect(score(input)).toEqual(output);
  });
  it('should display "Game Incomplete"', () => {
    const input = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const output = 'Game Incomplete';
    expect(score(input)).toEqual(output);
  });
  it('should display "Game Incomplete"', () => {
    const input = [6, 4, 3, 0];
    const output = 'Game Incomplete';
    expect(score(input)).toEqual(output);
  });
  it('should display "Invalid Input"', () => {
    const input = [16, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const output = 'Invalid Input';
    expect(score(input)).toEqual(output);
  });
});