class Stack {
    constructor() {
        this.array = [];
    }

    pushMethod(element) {
         this.array.push(element)
    }

    popMethod(element) {
         this.array.pop(element);
    }

    peekMethod() {
        return this.array[0];
    }
    
    isEmptyMethod(){
        let boolean = this.array > 0 ? true : false;
        return boolean;
    }
    getStack(){
        return this.array
    }
    
}

module.exports = Stack