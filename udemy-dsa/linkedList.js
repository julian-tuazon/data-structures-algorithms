class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const nodeToAppend = new Node(value);
    this.tail.next = nodeToAppend;
    this.tail = nodeToAppend;
    this.length++;
    return this;
  }

  prepend(value) {
    const nodeToPrepend = new Node(value);
    nodeToPrepend.next = this.head;
    this.head = nodeToPrepend;
    this.length++;
    return this;
  }

  insert(index, value) {
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);
    const nodeToInsert = new Node(value);
    const currentNode = this.traverseToIndex(index - 1);
    nodeToInsert.next = currentNode.next;
    currentNode.next = nodeToInsert;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) this.head = this.head.next;
    const currentNode = this.traverseToIndex(index - 1);
    currentNode.next = currentNode.next.next;
    this.length--;
  }

  traverseToIndex(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  printList() {
    const linkedListArr = [];
    let currentNode = this.head;
    while(currentNode !== null) {
      linkedListArr.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return linkedListArr;
  }
}

exports.LinkedList = LinkedList;
exports.Node = Node;
