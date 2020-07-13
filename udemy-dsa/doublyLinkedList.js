class DLLNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = new DLLNode(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const nodeToAppend = new DLLNode(value);
    nodeToAppend.prev = this.tail;
    this.tail.next = nodeToAppend;
    this.tail = nodeToAppend;
    this.length++;
  }

  prepend(value) {
    const nodeToPrepend = new DLLNode(value);
    nodeToPrepend.next = this.head;
    this.head.prev = nodeToPrepend;
    this.head = nodeToPrepend;
    this.length++;
  }

  insert(index, value) {
    if (index !== 0 && !index) return;
    if (index < 0) return;
    if (index === 0) return this.prepend(value);
    if (index >= this.length) return this.append(value);
    if (index < this.length / 2) return this.insertForwards(index, value);
    return this.insertBackwards(index, value);
  }

  insertForwards(index, value) {
    const nodeToInsert = new DLLNode(value);
    const trailingNode = this.traverseToIndexForwards(index - 1);
    const leadingNode = trailingNode.next;
    nodeToInsert.next = leadingNode;
    leadingNode.prev = nodeToInsert;
    trailingNode.next = nodeToInsert;
    nodeToInsert.prev = trailingNode;
    this.length++;
  }

  insertBackwards(index, value) {
    const nodeToInsert = new DLLNode(value);
    const leadingNode = this.traverseToIndexBackwards(index);
    const trailingNode = leadingNode.prev;
    nodeToInsert.next = leadingNode;
    nodeToInsert.prev = trailingNode;
    trailingNode.next = nodeToInsert;
    leadingNode.prev = nodeToInsert;
    this.length++;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) return this.removeHead();
    if (index === this.length - 1) return this.removeTail();
    if (index < this.length / 2) return this.removeForwards(index);
    return this.removeBackwards(index);
  }

  removeHead() {
    const newHead = this.head.next;
    newHead.prev = null;
    this.head = newHead;
    this.length--;
  }

  removeTail() {
    const newTail = this.tail.prev;
    newTail.next = null;
    this.tail = newTail;
    this.length--;
  }

  removeForwards(index) {
    const trailingNode = this.traverseToIndexForwards(index - 1);
    const leadingNode = trailingNode.next.next;
    trailingNode.next = leadingNode;
    leadingNode.prev = trailingNode;
    this.length--;
  }

  removeBackwards(index) {
    const leadingNode = this.traverseToIndexBackwards(index + 1);
    const trailingNode = leadingNode.prev.prev;
    trailingNode.next = leadingNode;
    leadingNode.prev = trailingNode;
    this.length--;
  }

  traverseToIndexForwards(index) {
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  traverseToIndexBackwards(index) {
    let currentNode = this.tail;
    for (let i = this.length - 1; i > index; i--) {
      currentNode = currentNode.prev;
    }
    return currentNode;
  }

  printList() {
    const doublyLinkedList = [];
    let currentNode = this.head;
    for (let i = 0; i < this.length; i++) {
      doublyLinkedList.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(doublyLinkedList);
  }
}

const dll = new DoublyLinkedList(1);
dll.insert(2, 23);
dll.insert(1, 4);
dll.insert(1, 7);
dll.insert(2, 99);
dll.insert(200, 201);
dll.insert(0, 11);
dll.insert(3, 5);
console.log('tail', dll.tail.value);
console.log('head', dll.head.value);
console.log('len', dll.length);
dll.printList();
