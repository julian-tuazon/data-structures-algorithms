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
    return undefined;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      const currentBucket = this.data[i];
      if (!currentBucket) continue;
      for (let k = 0; k < currentBucket.length; k++) {
        keysArr.push(currentBucket[k][0]);
      }
    }
    return keysArr;
  }
}

exports.HashTable = HashTable;
