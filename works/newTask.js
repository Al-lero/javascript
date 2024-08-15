function testScore(result){
    return result.filter(detail => detail >= 70)
}

function examGrade (result){
    return result.map( grade => grade + 5);
}

function squared(numbers){
    return numbers.map(num => num * num);

   }

   function afternoonClass(classTiming) {
    return classTiming.filter(time => time.includes("PM")) 
   
}

function sharingBook(book) {
    let members = ["Emily", "Jack", "Sophia", "Daniel"];
    let books = ["Book A", "Book B", "Book C", "Book D"];

    for (let member of members) {
   let bookIndex = members.indexOf(member); 
     let book = books[bookIndex]; 
     console.log(`${member} gets "${book}"`);
   }}


 module.exports = {testScore, examGrade, squared, afternoonClass} 