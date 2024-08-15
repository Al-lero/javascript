const multiplyNumbers = require("./fun")

test("multiply two numbers", ()=> {
    let numberOne = 2;
    let numberTwo = 4;

    let result = multiplyNumbers(numberOne, numberTwo);
    expect(8).toBe(result);

})