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

  remove(value) {
    let currentNode = this.root;
    if (!currentNode) return undefined;
    let previousNode = null;
    while (currentNode) {
      if (value === currentNode.value) {
        let replacementNode = null;
        if (currentNode.right && currentNode.right.left) {
          replacementNode = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (replacementNode.left) {
            leftmostParent = replacementNode;
            replacementNode = replacementNode.left;
          }
          leftmostParent.left = replacementNode.right;
          replacementNode.left = currentNode.left;
          replacementNode.right = currentNode.right;
        } else if (currentNode.right) {
          replacementNode = currentNode.right;
          replacementNode.left = currentNode.left;
        } else if (currentNode.left) {
          replacementNode = currentNode.left;
        }
        if (!previousNode) {
          this.root = replacementNode;
        } else if (currentNode.value > previousNode.value) {
          previousNode.right = replacementNode;
        } else {
          previousNode.left = replacementNode;
        }
        return true;
      } else if (value < currentNode.value) {
        previousNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        previousNode = currentNode;
        currentNode = currentNode.right;
      } else {
        return undefined;
      }
    }
  }

  breadthFirstSearch() {
    let currentNode = this.root;
    const list = [];
    const queue = [];
    queue.push(currentNode);
    while (queue.length) {
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
      list.push(queue.shift().value);
      currentNode = queue[0];
    }
    return list;
  }

  breadthFirstSearchRecursive(queue, list) {
    if (!queue.length) return list;
    const currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
    return this.breadthFirstSearchRecursive(queue, list);
  }
}
