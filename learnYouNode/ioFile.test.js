const numLines = require('./ioFile');

describe('numberOfNewlines() :', () => {
  it('should display the number of times \n occurs in  the file ', () => {
    process.argv[2] = '/Users/Shashwat_Sinha/codeAcademy2019/learnYouNode/ioFile.js';
    expect(numLines()).toEqual(11);
  });
});

describe('numberOfNewlines() :', () => {
  it('should display the number of times \n occurs in  the file ', () => {
    process.argv[2] = '/Users/Shashwat_Sinha/codeAcademy2019/learnYouNode/readFile.txt';
    expect(numLines()).toEqual(1);
  });
});