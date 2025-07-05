// Stack using LL

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;

        // to implement Stack using an array
        this.stackList = []; 
    }

    // Print Stack - Only for verifying output
    printStack() {
        let temp = this.top;
        while(temp) {
            console.log(temp.value);
            temp = temp.next;
        }
    } 

    printStackList() {
        for(const value of this.stackList) {
            console.log(value)
        }
    }

    // Adds a node to the top of a Stack
    /**
     * 1. Empty stack - Add new Node, assign top
     * 2. Has a node - Update top to new Node
     */
    push(value) {
        const newNode = new Node(value);
        if(!this.top) {
            this.top = newNode;
        }else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }

    // Removes a node from the top of Stack
    /**
     * 1. Empty Stack - return undefined
     * 2. Update top to top.next
     */
    pop() {
        if(!this.top) return undefined;
        const temp = this.top;
        this.top = this.top.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    // When Stack implemented using an Array us below operations
    pushStackArray(value) {
        this.stackList.push(value);
    }

    popStackArray() {
        if(this.stackList.length){
            return this.stackList.pop();
        }
        return null;
    }
}

const stack = new Stack(10);
stack.push(5);
stack.push(12);
stack.push(3);
stack.push(41);
console.log('Stack values --------->')
console.log(stack.printStack());

console.log('Stack pop --------->')
console.log(stack.pop());
console.log('Stack values --------->')
console.log(stack.printStack());


const stackArr = new Stack();
stackArr.pushStackArray(5);
stackArr.pushStackArray(12);
stackArr.pushStackArray(3);
stackArr.pushStackArray(41);

console.log('Stack Array values --------->')
console.log(stackArr.printStackList());

console.log(stackArr.popStackArray());
console.log('Stack Array values --------->')
console.log(stackArr.printStackList());