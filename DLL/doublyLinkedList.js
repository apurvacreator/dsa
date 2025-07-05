class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
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

    // Adds a node to the end of a DLL
    /**
     * 1. Empty DLL - Add new Node, assign head and tail
     * 2. Has a node - Add new Node, update tail
     */
    push(value) {
        const newNode = new Node(value);
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // Removes a node from the end of a DLL
    /**
     * 1. Empty DLL - return undefined
     * 2. Has one Node - set head and tail to null, return removed Node
     * 3. Has Nodes - set tail to tail.prev and new tail.next to null
     */
    pop() {
        if(!this.head) return undefined;
        const temp = this.tail;
        if(this.tail.prev){
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
        }else {
            // only one node present
            this.tail = null;
            this.head = null;
        }
        this.length--
        return temp;
    }

    // Adds a node to the beginning of a DLL
    /**
     * 1. Empty DLL - Make the new Node as head and tail
     * 2. Has Nodes - Link new Node.next to head, link head.prev to new Node, make new Node as head
     */
    unshift(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;
        return this;
    }


    // Removes a node from the beginning of a DLL
    /**
     * 1. Empty DLL - return undefined
     * 2. Has one Node - set head and tail to null, return removed Node
     * 3. Has Nodes - set head to head.next and new head.prev to null
     */
    shift() {
        if(!this.head) return undefined;

        const temp = this.head;
        if(this.head.next){
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }else {
            this.head = null;
            this.tail = null
        }
        this.length--;
        return temp;
    }

    // Gets the Node in a given index
    /**
     * 1. Index out of bound - return undefined;
     * 2. Valid index - If index falls in the first half of DLL, traverse left->right, else traverse right->left
     */
    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if(index < this.length / 2) {
            for(let i = 0; i < index; i++) {
                temp = temp.next;
            }
        }else {
            temp = this.tail;
            for(let j = this.length - 1;  j > index; j--) {
                temp = temp.prev;
            }
        }
        return temp;
    }

    // Sets the value of Node at a given index
    /**
     * 1. Index out of bound - return false;
     * 2. Valid index - If index falls in the first half of DLL, traverse left->right, else traverse right->left,
     * Update value of found Node
     */
    set(index, value) {
        const temp = this.get(index);
        if(temp){
            temp.value = value;
            return true;
        }

        return false;
    }

     // Inserts a new Node at a given index
    /**
     * 1. Index out of bound -> return false;
     * 2. Index = 0 -> Perform unshift
     * 3. Index = LL length -> Perform push
     * 4. Link new Node to next node and prev node. Link prev.next to new Node, link next.prev to new Node.
     */
    insert(index, value) {
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index > this.length) return false;

        const newNode = new Node(value);
        const before = this.get(index - 1);
        const after = before.next;

        newNode.next = after;
        after.prev = newNode;
        before.next = newNode;
        newNode.prev = before;
        this.length++;

        return true;
    }

    // Removes the Node at a given index
    /**
     * 1. Index out of bound -> return false;
     * 2. Index = 0 -> Perform shift
     * 3. Index = DLL length-1 -> Perform pop
     * 4. Link prev node  of index to to next node of index. Set next and prev of node at index to null
     */
    remove(index){
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;

        const temp = this.get(index);
        const before = temp.prev;
        before.next = temp.next;
        temp.next.prev = before;
        temp.next = null;
        temp.prev = null;

        this.length--;
        return temp;
    }

    // Reverses a DLL
    reverse() {
        let temp = null;
        let curr = this.head;

        while(curr){
            temp = curr.prev
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }
}

const dlinkedList = new DoublyLinkedList(10);
dlinkedList.push(5);
dlinkedList.push(12);
dlinkedList.push(3);
dlinkedList.push(41);
console.log('Doubly LinkedList values --------->')
console.log(dlinkedList.printList());

console.log('Doubly LinkedList pop --------->')
console.log(dlinkedList.pop());
console.log('Doubly LinkedList values --------->')
console.log(dlinkedList.printList());

console.log('Doubly LinkedList unshift --------->')
dlinkedList.unshift(21);
console.log('Doubly LinkedList values --------->')
console.log(dlinkedList.printList());

console.log('Doubly LinkedList shift --------->')
console.log(dlinkedList.shift());
console.log('Doubly LinkedList values --------->')
console.log(dlinkedList.printList());

console.log('Doubly LinkedList get --------->')
console.log(dlinkedList.get(2));

console.log('Doubly LinkedList set --------->')
console.log(dlinkedList.set(2, 30));
console.log('Doubly LinkedList values --------->')
console.log(dlinkedList.printList());

console.log('Doubly LinkedList insert --------->')
console.log(dlinkedList.insert(4, 100));
console.log('Doubly LinkedList values --------->')
console.log(dlinkedList.printList());

console.log('Doubly LinkedList remove --------->')
console.log(dlinkedList.remove(1));
console.log('Doubly LinkedList values --------->')
console.log(dlinkedList.printList());


console.log('Doubly LinkedList reverse --------->')
dlinkedList.reverse();
console.log('Doubly LinkedList values --------->')
console.log(dlinkedList.printList());