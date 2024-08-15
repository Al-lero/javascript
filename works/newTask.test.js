const {testScore, examGrade, squared, afternoonClass} = require('./newTask.js')

test("getting Expected Result", ()=> {
    const numbers = [87,99,12,45,67,89,76,32,66,77]
    const expected = [87, 99, 89, 76, 77]
    const expectedResult = testScore(numbers)
    expect(expected).toEqual(expectedResult);

});

test ('addFive', () => {
    const grade = [85,92,78,88,95]
    const expected = [90, 97, 83, 93, 100]
    const expectedResult = examGrade(grade)
    expect(expected).toEqual(expectedResult);
});

test ('getting square', () => {
    const numbers = [1, 2, 3, 4, 5];
    const expected = [1, 4, 9, 16, 25]
    const expectedResult = squared(numbers)

    expect(expected).toStrictEqual(expectedResult);
});

 test ('sharing book', () => {
     const members = ["Emily", "Jack", "Sophia", "Daniel"];
     const books = ["Book A", "Book B", "Book C", "Book D"];
    const expectSharing = {
        "Emily": "Book A",
        "Jack": "Book B",
        "Sophia" : "Book C",
        "Daniel" : "Book D"
    }
    expect(books).toEqual(expectSharing.values())
 })

test ('checking timming', () => {
    const classTiming = ["9.00AM","11.00AM","1.00PM","3.00PM","5.00PM"]
    const expectedTime = ["1.00PM","3.00PM","5.00PM"]
    const actualTime = afternoonClass(classTiming);

    expect(expectedTime).toStrictEqual(actualTime);
});
