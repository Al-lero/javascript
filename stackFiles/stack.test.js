const Stack = require('./Stack.js');
// const test = require("node:test");

test("test that push method push in element in the array", () =>{
    let stack = new  Stack()
    stack.pushMethod("Youtube")
    stack.pushMethod("Microsoft")
    stack.pushMethod("Google")
    stack.pushMethod("Semicolon")
    expect(stack.getStack()).toEqual(["Youtube", "Microsoft", "Google", "Semicolon" ]);
})

test("test that peek method return the last element in the array", () =>{
    let stack = new  Stack()
    stack.pushMethod("Youtube")
    stack.pushMethod("Microsoft")
    stack.pushMethod("Google")
    stack.pushMethod("Semicolon")
    expect(stack.peekMethod()).toBe("Youtube")
})

test("test that pop method pop in element in the array", () =>{
    let stack = new  Stack()
    stack.pushMethod("Youtube")
    stack.pushMethod("Microsoft")
    stack.pushMethod("Google")
    stack.pushMethod("Semicolon")
    stack.popMethod("Google")
    stack.popMethod("Semicolon")
    expect(stack.getStack()).toEqual(["Youtube", "Microsoft"]);
})