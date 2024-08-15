// function gotoMainMenu(){
//     console.log("Welcome to Lero's Bank");

//     const prompt = require("prompt-sync")();
//     let mainMenu = `
//     1-> Register
//     2-> Login
//    `
//     console.log(mainMenu);
//     prompt("Enter preffered number: ");
//     userInput = 
    


// }

// callBack functions
// map
const listOfNumber = [2,3,4,5,1];
//const user = {
  //  "firstName": "Alero",
    //"lastName": "Utieyione",
//};

let result = listOfNumber.map((detail)=>{
    return detail * detail;
})
console.log(result);

// Or

const listOfNumbers = [2,3,4,5,3];

function multiplyNumbers(number) {
    return number * 2;
}
result = listOfNumbers.map(multiplyNumbers);

console.log(result);

//  Find 

const listOfNum = [2,3,5,6,8];
const answer = listOfNum.find((number)=>{
    return number > 2;
})
console.log(answer)


// FindIndex

const listOfNumb = [2,3,5,6,8];
const answer1 = listOfNumb.findIndex((number)=>{
    return number > 3;
});
// console.log(answer1)

// 
const listOfNo = [[2,3,4,5,1],[1,2],[2,3,,4,5]];
let value = listOfNo[1][1]; 

console.log(value)







