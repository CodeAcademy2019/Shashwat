const throwError= require('./throwAnError');
describe('throwError', () => {
    it('should get resolved and gives JSON', () => {
        return expect(throwError('{"Brand":"Nike","Size":"Large"}')).resolves.toEqual({"Brand":"Nike","Size":"Large"});
    });
    it('should get rejected and give error message', () => {
        return expect(throwError({"Brand":"Nike"})).rejects.toEqual('Unexpected token o in JSON at position 1');
    });
});