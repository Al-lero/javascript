
const reverseArray = require('./reverseArrayTask')
test('that it would reverse string', () =>{
    const arr = "string"
    const result = reverseArray(arr)
    const expected = ['g','n','i','r','t','s']
    expect(result).toEqual(expected)

  });

//   const reverseArray = require('./reverseArrayTask')
test('that it would reverse number form highest to lowest',()=>{
  const numbers = [1,2,3,4,5]
  const result = reverseArray(numbers)
  const expected = [5,4,3,2,1]
  expect(result).toEqual(expected)
})
