// Import the function sum from the app.js file
const { sum, fromDollarToYen } = require('./app.js');

test("One Euro should be 1.07 Dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One Dollar should be 156.5 Yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yens = fromDollarToYen(5);
    const expected = 5 * 156.5;
    expect(fromDollarToYen(5)).toBe(782.5);
})

test("One Yen should be 0.87 Pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const pounds = fromYenToPound (10.7);
    const expected = 10.7 * 0.87;
    expect(fromYenToPound(10.7)).toBe(9.309)
})