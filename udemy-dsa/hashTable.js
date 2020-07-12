class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  get(key) {
    const address = this._hash(key);
    if (this.data[address]) {
      const currentBucket = this.data[address];
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
}

const ht = new HashTable(5);
ht.set('grapes', 200);
ht.set('apples', 54);
ht.set('wine', 22);
ht.set('cheese', 99);

console.log(ht.data);
console.log(ht.get('grapes'));

exports.HashTable = HashTable;
