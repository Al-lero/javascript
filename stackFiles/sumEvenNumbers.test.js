const addEven = require('./sumEvenNumbers');

test('adds even numbers correctly', () => {
    const number = (0,2)
    const result = addEven(numbers)
    const expected = [2]
    expect(result).toEqual(expected)
});

test('add more even numers', () =>{
    const numbers = (10,5)
    const result = addEven(numers)
    const expected = [15]
    expect(result).toEqual(expected)
})
  
