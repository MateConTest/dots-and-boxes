let board

function setup() {
	createCanvas(400, 400)
    board = new Board(10, 10, 45)
}

function draw() {
    background(10)
    board.show()
}
