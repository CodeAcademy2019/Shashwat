const httpGetRequest = require('./httpClient');

describe('httpGetRequest() :', () => {
  it('should display "Hello World!"', () => {
    process.argv = ['', '', 'http://localhost:8081/'];
    const callback = (data) => {
      expect(data).toEqual('Hello World!');
    };
    httpGetRequest(callback);
  });
  it('should not display "Hello World"', () => {
    process.argv = ['', '', 'http://localhost:8081/'];
    const callback = (data) => {
      expect(data).not.toEqual('Hello World');
    };
    httpGetRequest(callback);
  });
});
