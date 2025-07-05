class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    // Print Queue - Only for verifying output
    printQueue() {
        let temp = this.first;
        while(temp) {
            console.log(temp.value);
            temp = temp.next
        }
    } 

    // Add a node to the end of the queue
    /**
     * 1. Empty Queue - Add new Node, assign first and last
     * 2. Has a node - Add new Node, update last
     */
    enqueue(value) {
        const newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    // Removes the first node of queue
    /**
     * 1. Empty Queue - return undefined
     * 2. Has one Node - set first and last to null, return removed Node
     * 3. Has Nodes - set first.next as new first, return old first
     */
    dequeue() {
        if(!this.first) return undefined;
        const temp = this.first;
        this.first = this.first.next;
        temp.next = null;
        this.length--;
        if(this.length === 0){
            this.last = null;
        }

        return temp;
    }
}

const queue = new Queue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);
queue.enqueue(50);
console.log('Queue values --------->')
console.log(queue.printQueue());

console.log('Dequeue --------->')
console.log(queue.dequeue());
console.log('Queue values --------->')
console.log(queue.printQueue());
 
