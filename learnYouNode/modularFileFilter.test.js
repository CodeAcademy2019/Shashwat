const modularFilter = require('./directoryFilterModule');

describe('filteredLs() :', () => {
  const input1 = '/Users/Shashwat_Sinha/codeAcademy2019/learnYouNode/';
  it('should display the name of files with .js extension in current directory', (done) => {
    const input3 = '/Users/Shashwat_Sinha/codeAcademy2019/ScopeChainsClosures/';
    const input2 = 'js';
    const output = ['closures.js', 'garbageCollection.js', 'scopeChains.js', 'scopes.js', 'shadowing.js'];
    const callback = (err, data) => {
      expect(data).toEqual(output);
      done();
    };
    modularFilter.filteredLs(input3, input2, callback);
  });
  it('should display the name of files with .txt extension in current directory', (done) => {
    const input2 = 'txt';
    const output = ['readFile.txt'];
    const callback = (err, data) => {
      expect(data).toEqual(output);
      done();
    };
    modularFilter.filteredLs(input1, input2, callback);
  });
  it('should display the name of files with . extension in current directory', (done) => {
    const input2 = '';
    const output = [];
    const callback = (err, data) => {
      expect(data).toEqual(output);
      done();
    };
    modularFilter.filteredLs(input1, input2, callback);
  });
  it('should display error as directory path is empty', (done) => {
    const input3 = '';
    const input2 = '';
    const callback = (err) => {
      expect(err.message).toMatch('error listing files in directory');
      done();
    };
    modularFilter.filteredLs(input3, input2, callback);
  });
});

describe('filterNamewithExt() :', () => {
  it('should display the name of files with .js extension', () => {
    const input1 = ['input.js', 'hello.js', 'code.txt', 'world.html', 'javascript.pdf'];
    const input2 = 'js';
    const output = ['input.js', 'hello.js'];
    expect(modularFilter.filterNamewithExt(input1, input2)).toEqual(output);
  });
  it('should display the name of files with .txt extension', () => {
    const input1 = ['input.js', 'hello.js', 'code.txt', 'world.html', 'javascript.pdf'];
    const input2 = 'txt';
    const output = ['code.txt'];
    expect(modularFilter.filterNamewithExt(input1, input2)).toEqual(output);
  });
  it('should display the name of files with . extension', () => {
    const input1 = ['input.js', 'hello.js', 'code.txt', 'world.html', 'javascript.pdf'];
    const input2 = '';
    const output = [];
    expect(modularFilter.filterNamewithExt(input1, input2)).toEqual(output);
  });
});
