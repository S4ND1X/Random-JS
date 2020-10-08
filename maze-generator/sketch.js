// https://en.wikipedia.org/wiki/Maze_generation_algorithm

let cols, rows;

let w = 50;

let grid = [];

let currentCell;

function setup() {
  createCanvas(windowWidth, windowHeight);

  cols = floor(750 / w);
  rows = floor(750 / w);

  //Create a cell of height and width
  for (var row = 0; row < rows; row++) {
    for (var col = 0; col < cols; col++) {
      var cell = new Cell(row, col);
      grid.push(cell);
    }
  }

  currentCell = grid[0];
  currentCell.checkNeighbors();
}

function draw() {
  background(30);
  grid.forEach((cell) => cell.show());

  currentCell.visited = true;
}

function Cell(i, j) {
  this.i = i;
  this.j = j;
  //top, right, bottom, left
  this.walls = [true, true, true, true];
  this.visited = false;

  this.show = () => {
    //Inital x,y position
    var xLeft = this.i * w;
    var yTop = this.j * w;

    //Calculate final x,y position
    var xRight = xLeft + w,
      yBottom = yTop + w;

    //Drawing cell
    stroke(50, 200, 200);
    //@Args initialX, initialY, finalX, finalY

    //Top line
    if (this.walls[0]) {
      line(xLeft, yTop, xRight, yTop);
    }
    //Right line
    if (this.walls[1]) {
      line(xRight, yTop, xRight, yBottom);
    }
    //Bottom line
    if (this.walls[2]) {
      line(xRight, yBottom, xLeft, yBottom);
    }
    //Left Line
    if (this.walls[3]) {
      line(xLeft, yBottom, xLeft, yTop);
    }
    if (this.visited) {
      fill(225, 0, 200, 75);
      rect(xLeft, yTop, w, w);
    }
  };

  this.checkNeighbors = () => {
	  
  };
}
