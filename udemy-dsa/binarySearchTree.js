class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) this.root = new Node(value);
    else this.insertNode(value, this.root);
  }

  insertNode(value, currentNode) {
    if (value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = new Node(value);
      } else {
        return this.insertNode(value, currentNode.left);
      }
    } else if (value > currentNode.value) {
      if (currentNode.right === null) {
        currentNode.right = new Node(value);
      } else {
        return this.insertNode(value, currentNode.right);
      }
    } else if (value === currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = new Node(value);
      } else if (currentNode.right === null) {
        currentNode.right = new Node(value);
      } else {
        return this.insertNode(value, currentNode.left);
      }
    }
  }

  lookup(value) {
    if (this.root === null) return undefined;
    return this.findNode(value, this.root);
  }

  findNode(value, currentNode) {
    if (value === currentNode.value) {
      return currentNode;
    } else if (value < currentNode.value && currentNode.left !== null) {
      return this.findNode(value, currentNode.left);
    } else if (value > currentNode.value && currentNode.right !== null) {
      return this.findNode(value, currentNode.right);
    } else {
      return undefined;
    }
  }
}
