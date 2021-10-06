const RED = "Red"
const BLUE = "Blue"
const GRAY = "Gray"

class Board {
    constructor(width, height, cell_size) {
        this.width = width
        this.height = height
        this.cell_size = cell_size
        this.edges = []
        for(let y = 0; y < height - 1; y++) {
            let row = []
            for(let x = 0; x < width - 1; x++) {
                let pos       = [x, y]
                let right_pos = [x + 1, y]
                let top_pos   = [x, y + 1]
                row.push([new BoardEdge(pos, right_pos), new BoardEdge(pos, top_pos)])
            }
            this.edges.push(row)
        }
    }

    show() {
        for(let y = 0; y < this.height - 1; y++) {
            for(let x = 0; x < this.width - 1; x++) {
                strokeWeight(3)
                push()
                translate(x * this.cell_size, y * this.cell_size)
                if(this.edges[y][x][0].color == GRAY) {
                    stroke(255)
                }
                line(0, 0, this.cell_size, 0)
                if(this.edges[y][x][1].color == GRAY) {
                    stroke(255)
                }
                line(0, 0, 0, this.cell_size)
                pop()
            }
        }
    }
}

class BoardEdge {
    constructor(pos1, pos2, color=GRAY) {
        this.pos1 = pos1
        this.pos2 = pos2
        this.color = color
    }
}