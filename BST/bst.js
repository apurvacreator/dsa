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

    // Checks if value exists in BST recursively
    rContains(value, currentNode = this.root) {
        if(currentNode === null) return false;
        if(value === currentNode.value) return true;

        if(value < currentNode.value) {
            return this.rContains(value, currentNode.left);
        } else {
            return this.rContains(value, currentNode.right);
        }
    }

    // Inserts a new leaf node to BST
    #rInsert(value, currentNode = this.root) {
        if(currentNode === null) return new Node(value);

        if(value < currentNode.value) {
            currentNode.left =  this.#rInsert(value, currentNode.left);
        }else if(value > currentNode.value){
            currentNode.right = this.#rInsert(value, currentNode.right);
        }

        return currentNode;
    }

    rInsert(value) {
        if(!this.root) {
            this.root = new Node(value);
        }
        this.#rInsert(value);
    }

    minValue(currentNode) {
        while(currentNode.left !== null) {
            currentNode = currentNode.left;
        }
        return currentNode.value;
    }

    #rDelete(value, currentNode){
        if(currentNode === null) return null;
        if(value < currentNode.value) {
            currentNode.left = this.#rDelete(value, currentNode.left);
        }else if(value > currentNode.value){
            currentNode.right = this.#rDelete(value, currentNode.right);
        }else {
            if(currentNode.left === null && currentNode.right === null){
                currentNode = null;
            }else if(currentNode.left === null) {
                currentNode = currentNode.right;
            }else if(currentNode.right === null) {
                currentNode = currentNode.left;
            }else {
                const subtreeMin = this.minValue(currentNode);
                console.log('min value', subtreeMin);
                currentNode.value = subtreeMin;
                currentNode.right = this.#rDelete(subtreeMin, currentNode.right);
            }
        }
        return currentNode;
    }

    rDelete(value) {
        this.root = this.#rDelete(value, this.root);
    }
}

const bst = new BST();
bst.insert(47);
bst.insert(31);
bst.insert(29);
bst.insert(75);
bst.insert(56);
bst.insert(82);
console.log('contains 31 -->', bst.contains(31)); // true
console.log('contains 45 -->', bst.contains(45)); // false

console.log('rContains 45 -->', bst.rContains(45)); // false
console.log('rContains 56 -->', bst.rContains(56)); // true
console.log('rDelete 56 -->');
bst.rDelete(56);
console.log('rContains 56 -->', bst.rContains(56)); // false
console.log('BST Root ', bst.root);

console.log('rDelete root -->');
bst.rDelete(47);

console.log('rContains 47 -->', bst.rContains(47)); // false
console.log('BST Root ', bst.root.value);