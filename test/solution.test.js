const { nextMove } = require('../src/solution');
const { processData } = require('../index.js');

//test suite uses spyOn to mock console.log

describe('nextMove', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('Princess to the left', () => {
        const N = 5, r = 2, c = 3;
        const grid = [
            "-----",
            "-----",
            "p--m-",
            "-----",
            "-----"
        ];
        nextMove(N, r, c, grid);
        expect(consoleSpy).toHaveBeenCalledWith("LEFT");
    });

    test('Princess to the right', () => {
        const N = 3, r = 1, c = 0;
        const grid = [
            "---",
            "m-p",
            "---"
        ];
        nextMove(N, r, c, grid);
        expect(consoleSpy).toHaveBeenCalledWith("RIGHT");
    });

    test('Princess above', () => {
        const N = 3, r = 2, c = 1;
        const grid = [
            "-p-",
            "---",
            "--m"
        ];
        nextMove(N, r, c, grid);
        expect(consoleSpy).toHaveBeenCalledWith("UP");
    });

    test('Princess below', () => {
        const N = 3, r = 0, c = 1;
        const grid = [
            "--m",
            "---",
            "-p-"
        ];
        nextMove(N, r, c, grid);
        expect(consoleSpy).toHaveBeenCalledWith("DOWN");
    });

    test('No move when bot is at princess location', () => {
        const N = 3, r = 1, c = 1;
        const grid = [
            "---",
            "-p-",
            "---"
        ];
        nextMove(N, r, c, grid);
        expect(consoleSpy).not.toHaveBeenCalled();
    });
});

describe('processData', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => { });
    });
    afterEach(() => {
        consoleSpy.mockRestore();
    });

    test('Valid input processing', () => {
        const input = `5
2 3
-----
-----
p--m-
-----
-----`;
        processData(input);
        expect(consoleSpy).toHaveBeenCalledWith("LEFT");
    });

    test('Malformed input: grid row count less than N', () => {
        const input = `5
2 3
-----
-----
p--m-
-----`; // only 4 grid rows instead of 5
        expect(() => processData(input)).toThrow("Grid does not have the correct number of rows");
    });

    test('Malformed input: grid row with incorrect length', () => {
        const input = `3
1 1
--
-p-
---`;
        expect(() => processData(input)).toThrow("Row length mismatch");
    });

    test('Malformed input: invalid N', () => {
        const input = `abc
1 1
---
-m-
p--`;
        expect(() => processData(input)).toThrow("Invalid grid size");
    });

    test('Malformed input: missing princess', () => {
        const input = `3
1 1
---
-m-
---`;
        expect(() => processData(input)).toThrow("Princess not found");
    });

    test('Malformed input: bot coordinates out of bounds', () => {
        const input = `3
3 0
p--
-m-
---`;
        expect(() => processData(input)).toThrow("Invalid bot coordinates");
    });
});
