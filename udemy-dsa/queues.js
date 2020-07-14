class Item {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.end = null;
    this.length = 0;
  }

  enqueue(value) {
    const newItem = new Item(value);
    if (this.length === 0) this.front = newItem;
    else this.end.next = newItem;
    this.end = newItem;
    this.length++;
    return this;
  }

  dequeue() {
    if (this.length === 0) return null;
    if (this.front === this.end) this.end = null;
    const front = this.front.value;
    this.front = this.front.next;
    this.length--;
    return front;
  }

  peek() {
    return this.front.value;
  }
}
