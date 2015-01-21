QUnit.test("randomNumber Same Value Tests", function( assert ) {
    assert.deepEqual(randomNumber(0,0), 0, "When two zeroes are entered, should return 0");
});