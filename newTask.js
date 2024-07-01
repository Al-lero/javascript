result = [87,99,12,45,67,89,76,32,66,77]

let expectedResult = result.filter((detail) =>{
    return detail >= 70
})
console.log(expectedResult)


examGrade = [85,92,78,88,95]

let expectingResult = examGrade.map((detail) =>{
    return detail >= 70
})
console.log(expectingResult)

const numbers = [2,4,6,8,10]
const  squaredNumbers = numbers.map(num => num * num);

console.log(squaredNumbers);

let members = ["Emily", "Jack", "Sophia", "Daniel"];
let books = ["Book A", "Book B", "Book C", "Book D"];

for (let member of members) {
    let bookIndex = members.indexOf(member); 
    let book = books[bookIndex]; 
    console.log(`${member} gets "${book}"`);
  }

const classTiming = ["9.00AM","11.00AM","1.00PM","3.00PM","5.00PM"]
const afternoonClasses = classTimings.filter(time => {
const hour = parseInt(time); 
    return hour >= 12; 
});

