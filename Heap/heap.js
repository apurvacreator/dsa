// Heap using a 0th index array
// [99, 75, 58, 72, 61, 18]
// 100 (left, right) -> 99, 75
// 99 (left, right) -> 58, 72
// 75 (left, right) -> 61, 18  

class Heap {
    #heap = [];

    getHeap() {
        return [...this.#heap];
    }

    #leftChild(index) {
        return 2 * index + 1;
    }

    #rightChild(index) {
        return 2 * index + 2;
    }

    #parent(index) {
        return Math.floor((index - 1) / 2);
    }

    #swap(index1, index2) {
        [this.#heap[index1], this.#heap[index2]] = [this.#heap[index2], this.#heap[index1]];
    }

    #sinkDown(index) {
        let maxIndex = index;
        let size = this.#heap.length;
        while(true) {
            let leftIndex = this.#leftChild(index);
            let rightIndex = this.#rightChild(index);

            if(leftIndex < size && this.#heap[leftIndex] > this.#heap[maxIndex]){
                maxIndex = leftIndex;
            }

            if(rightIndex < size && this.#heap[rightIndex] > this.#heap[maxIndex]){
                maxIndex = rightIndex;
            }

            if(maxIndex !== index) {
                this.#swap(index, maxIndex)
                index = maxIndex;
            }else {
                return;
            }
        }
    }

    // Inserts a value to Heap
    // 1. Make the heap complete
    // 2. Loop => Compare the new value to its parent -> swap if parent is smaller until parent is no more smaller or root is reached
    insert(value) {
        this.#heap.push(value);
        let current = this.#heap.length - 1;
        while(current > 0 && this.#heap[current] > this.#heap[this.#parent(current)]) {
            this.#swap(current, this.#parent(current));
            current = this.#parent(current);
        }
    }

    // Remove top of heap
    remove() {
        if(this.#heap.length === 0) return null;
        if(this.#heap.length === 1) return this.#heap.pop();

        const maxValue = this.#heap[0];
        this.#heap[0] = this.#heap.pop();
        this.#sinkDown(0);

        return maxValue;
    }
}

const heap = new Heap();
heap.insert(99);
heap.insert(72);
heap.insert(61);
heap.insert(58);
heap.insert(100);
heap.insert(75);
console.log(heap.getHeap());

heap.remove();
console.log(heap.getHeap());

heap.remove();
console.log(heap.getHeap());