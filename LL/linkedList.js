class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    // Print LinkedList - Only for verifying output
    printList() {
        let temp = this.head;
        while(temp) {
            console.log(temp.value);
            temp = temp.next
        }
    } 

    // Adds a node to the end of a LL
    /**
     * 1. Empty LL - Add new Node, assign head and tail
     * 2. Has a node - Add new Node, update tail
     */
    push(value) {
        const newNode = new Node(value);
        if(!this.head){ // or this.length === 0
            this.head = newNode;
            this.tail = newNode;
        }else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Removes a node from the end of a LL
    /**
     * 1. Empty LL - return undefined
     * 2. Has one Node - set head and tail to null, return removed Node
     * 3. Has Nodes -  Traverse through the node previous to tail, 
     * remove tail, assign previous node as tail
     */
    pop() {
        // or this.length === 0
        if(!this.head) return undefined;
        let temp = this.head;
        let prev = null;
        while(temp.next){
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
        }
        return temp;
    }

    // Adds a node to the beginning of a LL
    /**
     * 1. Empty LL - Make the new Node as head and tail
     * 2. Has Nodes - Link new Node to head, make new Node as head
     */
    unshift(value){
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // Removes a node from the beginning of a LL
    /**
     * 1. Empty LL - return undefined
     * 2. Has one Node - set head and tail to null, return removed Node
     * 3. Has Nodes - set head.next as new head, return old head
     */
    shift(){
        // or this.length === 0
        if(!this.head) return undefined;

        const temp = this.head;
        this.head = this.head.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        temp.next = null;
        return temp;
    }

    // Gets the Node in a given index
    /**
     * 1. Index out of bound - return undefined;
     * 2. Valid index - Traverse LL with head in index 0, return the Node
     */
    get(index){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        return temp;
    }

    // Sets the value of Node at a given index
    /**
     * 1. Index out of bound - return false;
     * 2. Valid index - Traverse LL with head in index 0, update the value of Node and return true
     */
    set(index, value){
        // or use temp = this.get(index)
        if(index < 0 || index >= this.length) return false;
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp.next;
        }
        temp.value = value;
        return true;
    }

    // Inserts a new Node at a given index
    /**
     * 1. Index out of bound -> return false;
     * 2. Index = 0 -> Perform unshift
     * 3. Index = LL length -> Perform push
     * 4. Link new Node to next of prev.next, Link prev Node to new Node 
     */
    insert(index, value){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);

        const newNode = new Node(value);
        const prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }

    // Removes the Node at a given index
    /**
     * 1. Index out of bound -> return false;
     * 2. Index = 0 -> Perform shift
     * 3. Index = LL length-1 -> Perform pop
     * 4. Link prev Node to next of Node at index. set next of Node at index to null
     */
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        const prev = this.get(index - 1);
        const temp = prev.next;

        prev.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    // Reverses a LL
    reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let before = null;
        let after = null;
        while(temp){ 
            after = temp.next;
            temp.next = before;
            before = temp;
            temp = after;
        }

        return this;
    }
}


const linkedList = new LinkedList(10);
linkedList.push(5);
linkedList.push(12);
linkedList.push(3);
linkedList.push(41);
console.log('LinkedList values --------->')
console.log(linkedList.printList());

console.log('LinkedList pop --------->')
console.log(linkedList.pop());
console.log('LinkedList values --------->')
console.log(linkedList.printList());

console.log('LinkedList unshift --------->')
linkedList.unshift(21);
console.log('LinkedList values --------->')
console.log(linkedList.printList());

console.log('LinkedList shift --------->')
console.log(linkedList.shift());
console.log('LinkedList values --------->')
console.log(linkedList.printList());

console.log('LinkedList get --------->')
console.log(linkedList.get(2));

console.log('LinkedList set --------->')
console.log(linkedList.set(2, 30));
console.log('LinkedList values --------->')
console.log(linkedList.printList());

console.log('LinkedList insert --------->')
console.log(linkedList.insert(2, 100));
console.log('LinkedList values --------->')
console.log(linkedList.printList());

console.log('LinkedList remove --------->')
console.log(linkedList.remove(1));
console.log('LinkedList values --------->')
console.log(linkedList.printList());


console.log('LinkedList reverse --------->')
linkedList.reverse();
console.log('LinkedList values --------->')
console.log(linkedList.printList());
