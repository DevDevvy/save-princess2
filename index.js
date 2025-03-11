const { nextMove } = require('./src/solution');


function processData(input) {
    //trim input and split lines
    const lines = input.trim().split('\n');
    //parse first line as an interger (base 10)
    const N = parseInt(lines[0], 10);
    if (isNaN(N)) {
        throw new Error("Invalid grid size");
    }
    if (lines.length < 2 + N) {
        throw new Error("Grid does not have the correct number of rows");
    }
    //split second line into row and column, then map them as numbers
    const [r, c] = lines[1].split(' ').map(Number);
    //takes third row (2nd index) and makes the grid using up to the N + 2 index
    const grid = lines.slice(2, 2 + N);

    nextMove(N, r, c, grid);
}

module.exports = { processData };