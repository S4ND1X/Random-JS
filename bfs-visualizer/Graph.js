class Graph {
  constructor() {
    this.nodes = [];
    this.graph = {};
  }
  addNode(node) {
    this.nodes.push(node);
    this.graph[node.value] = node;
  }

  getNode(value) {
    return this.graph[value];
  }
}
