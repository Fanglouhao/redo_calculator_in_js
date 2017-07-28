var expect = chai.expect;

describe('Calculator', function () {
     {
         it('Testing: 1+2', function () {
            expect(calculate("1+2")).equal(3);
         });
         it('Testing: 6(6)', function () {
            expect(calculate("6(6)")).equal(36);
         });
         it('Testing: 1+-1', function () {
            expect(calculate("1+-1")).equal(0);
         });
    }
});