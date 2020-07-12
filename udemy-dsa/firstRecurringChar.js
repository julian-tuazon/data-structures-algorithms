const { HashTable } = require('./hashTable');

//using HashTable

function firstRecurringChar(arr) {
  const ht = new HashTable(arr.length);
  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    if (ht.get(currentNum) === undefined) {
      ht.set(currentNum, 1);
    } else {
      return currentNum;
    }
  }
  return undefined;
}

//Time: O(n)
//Space: O(n)


//using object literal

function firstRecurringChar2(arr) {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) map[arr[i]] = true;
    else return arr[i];
  }
  return undefined;
}

//Time: O(n)
//Space: O(n)

exports.firstRecurringChar = firstRecurringChar;
exports.firstRecurringChar2 = firstRecurringChar2;
