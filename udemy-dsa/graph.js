class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
      this.numberOfNodes++;
    }
  }

  addEdge(node1, node2) {
    if (!this.adjacentList[node1]) {
      this.addVertex(node1);
    }
    if (!this.adjacentList[node2]) {
      this.addVertex(node2);
    }
    if (!this.adjacentList[node1].includes(node2)) {
      this.adjacentList[node1].push(node2);
    }
    if (!this.adjacentList[node2].includes(node1)) {
      this.adjacentList[node2].push(node1);
    }
  }

  showConnections() {
    for (const node in this.adjacentList) {
      for (const adjacentNode of this.adjacentList[node]) {
        console.log(node + '<-->' + adjacentNode);
      }
    }
  }
}
