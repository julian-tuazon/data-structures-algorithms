class Item {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null
    this.bottom = this.top;
    this.length = 0;
  }

  push(value) {
    const newItem = new Item(value);
    if (this.length === 0) {
      this.top = newItem;
      this.bottom = newItem;
    } else {
      newItem.next = this.top;
      this.top = newItem;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.top === null || this.top === undefined) return null;
    if (this.top === this.bottom) this.bottom = null;
    const top = this.top.value;
    this.top = this.top.next;
    this.length--;
    return top;
  }

  peek() {
    return this.top.value;
  }
}

class ArrayStack {
  constructor() {
    this.data = [];
  }

  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
