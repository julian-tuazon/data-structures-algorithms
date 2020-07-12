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

const ll = new LinkedList(10);
ll.append(6);
ll.append(1);
ll.prepend(9001);
ll.insert(3, 'woooot');
ll.insert(0, 'front woo');
ll.insert(100, 'back woo');
console.log(ll.printList());
