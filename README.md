# Bot Saves Princess - 2

This project provides a Node.js solution for the "Bot Saves Princess - 2" challenge. The code is organized with a professional structure and follows a TDD (Test Driven Development) workflow. It includes:

- **Local project setup:** Entry point (`index.js`), solution logic (`src/solution.js`), and tests (`test/solution.test.js`).
- **HackerRank submission instructions:** How to copy and paste your solution into HackerRank.

## Local Setup and Running Tests

1. **Download / Clone the Code**

   Clone the repository to your local machine:

   ```bash
   git clone https://github.com/devdevvy/save-princess2.git
   cd save-princess2
   ```

2. **Install Packages**

   Install the required packages (including Jest for testing):

   ```bash
   npm install
   ```

3. **Run the Tests**

   Run all tests using:

   ```bash
   npm test
   ```

   This will execute the Jest tests located in the test/solution.test.js file.

## HackerRank Submission Instructions

HackerRank requires you to submit a single file containing your solution code. To prepare your submission:

### Option 1: Copy/Paste from Project Files

1. Copy the nextMove Function:

   Open src/solution.js and copy the entire nextMove function.

2. Copy the processData Function:

   Copy the processData function from src/solution.js

   Paste both functions into the HackerRank code editor.

### Option 2: Copy/Paste the Code Below:

```JavaScript
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
        //indexOf will return -1 if 'p' is not found
        //if found, break the loop
        //and store the row and column of the princess
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
```

**Replace the processData function body with both of these copied functions, then run the code!**
