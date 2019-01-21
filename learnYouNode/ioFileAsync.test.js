const numLines = require('./ioFileAsync');

describe('numberOfNewLines() :', () => {
  it('should display the number of times \\n occurs in a given input file ', (done) => {
    process.argv = ['', '', '/Users/Shashwat_Sinha/codeAcademy2019/learnYouNode/ioFile.js'];
    const callback = (data) => {
      expect(data).toEqual(13);
      done();
    };
    numLines.numberOfNewLines(callback);
  });
  it('should display the number of times \\n occurs in a given input file ', (done) => {
    process.argv = ['', '', '/Users/Shashwat_Sinha/codeAcademy2019/learnYouNode/readFile.txt'];
    const callback = (data) => {
      expect(data).toEqual(0);
      done();
    };
    numLines.numberOfNewLines(callback);
  });
  it('should display the number of times \\n occurs in a given input file ', (done) => {
    process.argv = ['', '', ''];
    const callback = (e) => {
      expect(e).toMatch('File Could Not be Read');
      done();
    };
    numLines.numberOfNewLines(callback);
  });
});
describe('numberOfLines() :', () => {
  it('should display the number lines in a string', () => {
    expect(numLines.getNumberOfLines('')).toEqual(0);
  });
  it('should display the number lines in a string', () => {
    expect(numLines.getNumberOfLines('\n\n\n')).toEqual(3);
  });
  it('should display the number lines in a string', () => {
    expect(numLines.getNumberOfLines('Hi\nI am \n Shashwat\n. I am new in Bengaluru\n')).toEqual(4);
  });
});
