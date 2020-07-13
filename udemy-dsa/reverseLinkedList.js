const { LinkedList, Node } = require('./linkedList');

function reverse(linkedList) {
  if (!linkedList) return undefined;
  if (linkedList.length < 2) return linkedList;
  const reversedLinkedListArr = [];
  let currentNode = linkedList.head;
  for (let i = 0; i < linkedList.length; i++) {
    reversedLinkedListArr.push(currentNode.value);
    currentNode = currentNode.next;
  }
  currentNode = linkedList.head;
  for (let i = reversedLinkedListArr.length - 1; i >= 0; i--) {
    currentNode.value = reversedLinkedListArr[i];
    currentNode = currentNode.next;
  }
  return linkedList;
}

function reverse2(linkedList) {
  if (!linkedList) return undefined;
  if (linkedList.length < 2) return linkedList;
  const reversedLinkedList = new LinkedList(linkedList.head.value);
  let currentNode = linkedList.head.next;
  while (currentNode !== null) {
    reversedLinkedList.prepend(currentNode.value);
    currentNode = currentNode.next;
  }
  return reversedLinkedList;
}

function reverse3(linkedList) {
  if (!linkedList) return undefined;
  if (linkedList.head.next === null) return linkedList;
  let prev = linkedList.head;
  let current = prev.next;
  while (current !== null) {
    const temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }
  linkedList.head.next = null;
  linkedList.tail = linkedList.head;
  linkedList.head = prev;
  return linkedList;
}
