class Maze {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.layout = [];
        this.generateMaze();
    }

    generateMaze() {
        // Simple maze generation algorithm (e.g., recursive backtracking)
        for (let i = 0; i < this.height; i++) {
            this.layout[i] = [];
            for (let j = 0; j < this.width; j++) {
                this.layout[i][j] = Math.random() < 0.3 ? 1 : 0; // 1 = wall, 0 = path
            }
        }
        // Ensure start and end points are clear
        this.layout[0][0] = 0; // Start
        this.layout[this.height - 1][this.width - 1] = 0; // End
    }

    drawMaze(context) {
        const tileSize = 20; // Size of each tile
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                context.fillStyle = this.layout[i][j] === 1 ? 'black' : 'white';
                context.fillRect(j * tileSize, i * tileSize, tileSize, tileSize);
            }
        }
    }
}

export default Maze;