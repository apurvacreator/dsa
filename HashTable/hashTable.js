// Hash Table: [ 
// [
//      ['key1', 10], ['key2', 20]
// ], 
// [
//      ['key3', 10], ['key4', 30]
// ] 
//]
class HashTable {
    constructor(size = 7){
        this.dataMap = new Array(size);
    }

    // To verify the table data
    printTable() {
        for(let i = 0; i < this.dataMap.length; i++){
            console.log(`${i}: ${this.dataMap[i]}`);
        }
    }

    // For a given key, generate an index for hashtable implemented using a nested array
    #hash(key) {
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    // Adds a key and value to the hashTable in the index obtained using hash function
    set(key, value){
        const index = this.#hash(key);
        if(!this.dataMap[index]) this.dataMap[index] = [];

        this.dataMap[index].push([key, value]);
        return this;
    }

    // Returns the value for the key in hashtable
    get(key) {
        const index = this.#hash(key);
        if(this.dataMap[index]){
            for(let i = 0; i < this.dataMap[index].length; i++){
                if(this.dataMap[index][i][0] === key){
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    // Returns all the keys in hashtable
    keys() {
        let allKeys = [];
        for(let i = 0; i < this.dataMap.length; i++){
            if(this.dataMap[i]){
                for(const [key] of this.dataMap[i]){
                    allKeys.push(key);
                }
            }
        }
        return allKeys;
    }
}

const hashTable = new HashTable();
hashTable.set('apple', 20);
hashTable.set('mangoes', 10);

console.log(hashTable.get('mangoes'));

hashTable.printTable();

console.log(hashTable.keys());
