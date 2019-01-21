const numLines = require('./ioFile');

describe('numberOfNewLines() :', () => {
  it('should display the number of times \n occurs in  the file ', () => {
    process.argv[2] = '/Users/Shashwat_Sinha/codeAcademy2019/learnYouNode/ioFile.js';
    expect(numLines.numberOfNewLines()).toEqual(13);
  });
  it('should display the number of times \n occurs in  the file ', () => {
    process.argv[2] = '/Users/Shashwat_Sinha/codeAcademy2019/learnYouNode/readFile.txt';
    expect(numLines.numberOfNewLines()).toEqual(0);
  });
});

describe('numberOfLines() :', () => {
  it('should display the number lines in a string', () => {
    expect(numLines.numberOfLines('')).toEqual(0);
  });
  it('should display the number lines in a string', () => {
    expect(numLines.numberOfLines('\n\n\n')).toEqual(3);
  });
  it('should display the number lines in a string', () => {
    expect(numLines.numberOfLines('Hi\nI am \n Shashwat\n. I am new in Bengaluru\n')).toEqual(4);
  });
});
