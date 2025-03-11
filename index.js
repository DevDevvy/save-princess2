const { nextMove } = require('./src/solution');


function processData(input) {
    const lines = input.trim().split('\n');
    const N = parseInt(lines[0], 10);
    if (isNaN(N)) {
        throw new Error("Invalid grid size");
    }
    if (lines.length < 2 + N) {
        throw new Error("Grid does not have the correct number of rows");
    }
    const [r, c] = lines[1].split(' ').map(Number);
    const grid = lines.slice(2, 2 + N);

    nextMove(N, r, c, grid);
}

module.exports = { processData };