function nextMove(N, r, c, grid) {
    // Validate grid size
    if (isNaN(N) || N < 1 || N >= 100) {
        throw new Error("Invalid grid size");
    }
    // Validate grid structure
    if (!Array.isArray(grid) || grid.length !== N) {
        throw new Error("Grid does not have the correct number of rows");
    }
    grid.forEach((row) => {
        if (row.length !== N) {
            throw new Error("Row length mismatch");
        }
    });
    // Validate bot coordinates
    if (r < 0 || r >= N || c < 0 || c >= N) {
        throw new Error("Invalid bot coordinates");
    }

    let princessRow, princessCol;
    // Find princess position in grid
    for (let i = 0; i < N; i++) {
        let col = grid[i].indexOf('p');
        if (col !== -1) {
            princessRow = i;
            princessCol = col;
            break;
        }
    }

    if (princessRow === undefined || princessCol === undefined) {
        throw new Error("Princess not found");
    }

    // Output only the next move toward the princess
    if (princessRow < r) {
        console.log("UP");
    } else if (princessRow > r) {
        console.log("DOWN");
    } else if (princessCol < c) {
        console.log("LEFT");
    } else if (princessCol > c) {
        console.log("RIGHT");
    }
}

module.exports = { nextMove };