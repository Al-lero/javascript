name("Alero");
function name(params) {
    console.log(params);
}

age("10");
function age(old) {
    console.log(old);
} 

//Nested Function

function higherOrderFunction() {
    console.log("I am higher function");

    function lowerFunction(){
        console.log("I am inner circle");

        function name(oll) {
            console.log("I am inner inner circle");
        }
        name();
    }
    lowerFunction();

}
higherOrderFunction();

 //arrow fuctions

 const print = () =>{
    console.log("Hellow world");
    console.log("I am Higher function");

    function lowerFunction() {
        console.log("Inner function");

        function name(param) {
            console.log("Inner inner function")
        }
        name("pass-in something");
    }
    lowerFunction();
 }
 print();

 //fuction as am argument 

 function firstFunction() {
    console.log("first function");
 };
 function secondFunction(callBack){
    console.log("second function");
    callBack();
 };
 secondFunction(firstFunction);

 // you can also write it like this
 secondFunction(function firstFunction() {
    console.log("first function");
 })

 // or this

 secondFunction(() =>  {
    console.log("first function");
 })

 
 

 
 