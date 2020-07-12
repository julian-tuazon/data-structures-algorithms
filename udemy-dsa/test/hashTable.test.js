const { expect } = require('chai');
const { HashTable } = require('../hashTable');

describe('HashTable class', () => {
  describe('keys()', () => {
    context('hash table has empty values', () => {
      it('should return empty array', () => {
        const ht = new HashTable(10);
        expect(ht.keys()).to.deep.equal([]);
      });
    });
    context('hash table has some empty values', () => {
      it('should return key names in array', () => {
        const ht = new HashTable(10);
        ht.set('nice', 12);
        ht.set('foood', 22);
        expect(ht.keys()).to.include('nice', 'foood');
      });
    });
    context('hash table has collisions', () => {
      it('should return key names in array', () => {
        const ht = new HashTable(2);
        ht.set('nice', 12);
        ht.set('great', 12);
        ht.set('wonderful', 12);
        ht.set('sakura', 12);
        expect(ht.keys()).to.include('nice', 'wonderful', 'great', 'sakura');
      });
    });
  });
});
