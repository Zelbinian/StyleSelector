QUnit.module("randomNumber tests");
QUnit.test("randomNumber two zeroes", function( assert ) {
    assert.deepEqual(randomNumber(0,0), 0, "When two zeroes are entered, should return 0");
});

QUnit.test("randomNumber two same value positive integers", function( assert ) {           
    assert.deepEqual(randomNumber(10,10), 10, "When two of the same integer are entered, should return that same integer");
});

QUnit.test("randomNumber two same value negative integers", function( assert ) {           
    assert.deepEqual(randomNumber(-1,-1), -1, "When two negative integers are entered, should return that same integer");
});

QUnit.test("randomNumber stays in range", function( assert ) {
    var result = randomNumber(1,10);
    assert.ok((result >= 1 && result <= 10), "Expected result to be between 1 and 10 and got " + result); 
});

QUnit.test("randomNumber flipped inputs", function( assert ) {
    var result = randomNumber(10,1);
    assert.ok((result >= 1 && result <= 10), "Expected result to be between 1 and 10 and got " + result); 
});

QUnit.module("chooseKnot tests");
QUnit.test("chooseKnot empty list", function( assert ) {
    assert.throws(function() {chooseKnot([])}, "Should throw an error when presented with an empty list");
});

QUnit.test("chooseKnot pick from list", function( assert ) {
    var sampleList = ["one", "two", "three"];
    var result = chooseKnot(sampleList);
    assert.ok($.inArray(result, sampleList) > -1, "Should always return an item from the provided list.\nlist: " + sampleList + "\nresult: " + result);
});