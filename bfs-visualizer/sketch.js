let data;
let graph;

// import Graph from "./Graph.js";
// import Node from "./Node.js";

function preload() {
  data = loadJSON("kevinbacon.json");
}

function setup() {
  graph = new Graph();
  noCanvas();

  data.movies.forEach((movie) => {
    const movieTitleNode = new Node(movie.title);
    graph.addNode(movieTitleNode);
    movie.cast.forEach((castMember) => {
      let castMemeberNode = graph.getNode(castMember);
      if (!castMemeberNode) {
        castMemeberNode = new Node(castMember);
      }
      graph.addNode(castMemeberNode);
      movieTitleNode.addEdge(castMemeberNode);
    });
  });

  console.log(graph);
}

function draw() {}
