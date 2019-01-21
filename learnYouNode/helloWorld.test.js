const welcomeMessage = require('./helloWorld');


describe('helloWorld()', () => {
  it('should return  "HELLO WORLD"', () => {
    expect(welcomeMessage()).toEqual('HELLO WORLD');
  });
});
