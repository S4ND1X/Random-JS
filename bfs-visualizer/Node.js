class Node {
  constructor(value) {
    this.value = value;
    this.edges = [];
    this.visited = false;
    this.parent = null;
  }

  addEdge(node) {
    this.edges.push(node);
    node.edges.push(this);
  }
}
