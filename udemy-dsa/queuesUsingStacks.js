class QueueUsingStacks {
  constructor() {
    this.data = [];
  }

  push(value) {
    if (this.length === 0) this.data.push(value);
    else {
      const reverseStack = [];
      while(this.data.length) {
        reverseStack.push(this.data.pop());
      }
      reverseStack.push(value);
      while(reverseStack.length) {
        this.data.push(reverseStack.pop());
      }
    }
    return this.data;
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  empty() {
    return this.data.length === 0;
  }
}
