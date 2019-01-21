const filterLs = require('./filteredLs');

describe('filteredLs() :', () => {
  const input1 = '/Users/Shashwat_Sinha/codeAcademy2019/learnYouNode/';
  it('should display the name of files with .js extension in current directory', (done) => {
    const input3 = '/Users/Shashwat_Sinha/codeAcademy2019/ScopeChainsClosures/';
    const input2 = 'js';
    process.argv = ['', '', input3, input2];
    const output = ['closures.js', 'garbageCollection.js', 'scopeChains.js', 'scopes.js', 'shadowing.js'];
    const callback = (data) => {
      expect(data).toEqual(output);
      done();
    };
    filterLs.filteredLs(callback);
  });
  it('should display the name of files with .txt extension in current directory', (done) => {
    const input2 = 'txt';
    process.argv = ['', '', input1, input2];
    const output = ['readFile.txt'];
    const callback = (data) => {
      expect(data).toEqual(output);
      done();
    };
    filterLs.filteredLs(callback);
  });
  it('should display the name of files with . extension in current directory', (done) => {
    const input2 = '';
    process.argv = ['', '', input1, input2];
    const output = [];
    const callback = (data) => {
      expect(data).toEqual(output);
      done();
    };
    filterLs.filteredLs(callback);
  });
});

describe('filterNamewithExt() :', () => {
  it('should display the name of files with .js extension', () => {
    const input1 = ['input.js', 'hello.js', 'code.txt', 'world.html', 'javascript.pdf'];
    const input2 = 'js';
    const output = ['input.js', 'hello.js'];
    expect(filterLs.filterNamewithExt(input1, input2)).toEqual(output);
  });
  it('should display the name of files with .txt extension', () => {
    const input1 = ['input.js', 'hello.js', 'code.txt', 'world.html', 'javascript.pdf'];
    const input2 = 'txt';
    const output = ['code.txt'];
    expect(filterLs.filterNamewithExt(input1, input2)).toEqual(output);
  });
  it('should display the name of files with . extension', () => {
    const input1 = ['input.js', 'hello.js', 'code.txt', 'world.html', 'javascript.pdf'];
    const input2 = '';
    const output = [];
    expect(filterLs.filterNamewithExt(input1, input2)).toEqual(output);
  });
});
