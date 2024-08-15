let arrayOfNumber  = [[1,2,3],[4,3,5],[3,6,7]];
let result = arrayOfNumber[0][1];
console.log(result);

let arrayOfNumbers  = [[1,2,3],[4,3,5],[3,6,7]];
let numberOfArrays = new Array([1,2,3],[4,3,5],[3,6,7]);
let result1 = numberOfArrays[0][2]
console.log(result1);

let row = 3;
let column = 3;

let twoDimensionalArray = new Array(row).fill(null).map(()=> new Array(column).fill(8));
console.log(twoDimensionalArray);

Array.from()