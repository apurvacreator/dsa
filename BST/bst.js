class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    // Inserts a new leaf to BST
    /**
     * 1. No root -> insert new Node at root
     * 2. Root present -> traverse left if value < node, else traverse right. 
     * update empty node.left or node.right with new Node
     */
    insert(value) {
        const newNode = new Node(value)
        if(!this.root) {
            this.root = newNode;
            return this;
        }
        let temp = this.root;
        while(true){
            if(newNode.value === temp.value) return undefined;

            if(newNode.value < temp.value){
                if(!temp.left) {
                    temp.left = newNode;
                    return this;
                }
                temp = temp.left;
            }else{
                if(!temp.right) {
                    temp.right = newNode;
                    return this;
                }
                temp = temp.right;
            }
        }
    }

    // Checks if value exists in BST
    /**
     * 1. No root -> return false;  
     * Root present -> traverse left if value < node, else traverse right. 
     */
    contains(value) {
        if(!this.root) return false;
        let temp = this.root;
        while(temp) {
            if(value < temp.value) {
                temp = temp.left;
            }else if(value > temp.value) {
                temp = temp.right;
            }else {
                return true;
            }
        }
        return false;
    }
}

const bst = new BST();
bst.insert(47);
bst.insert(31);
bst.insert(29);
bst.insert(75);
bst.insert(56);
bst.insert(82);
console.log(bst.contains(31)); // true
console.log(bst.contains(45)); // false

