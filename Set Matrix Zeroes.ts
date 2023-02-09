/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  // 1. iterate over the matrix, store rows & columns that have 0
  // 2. iterate over the matrix again, update those rows and columns to 0

  // n is the size of the matrix (n = row * col)
  // Time complexity: O(n)
  // Space complexity: O(n)

  const rows: Set<number> = new Set();
  const cols: Set<number> = new Set();

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 0) {
        rows.add(r);
        cols.add(c);
      }
    }
  }

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (rows.has(r) || cols.has(c)) matrix[r][c] = 0;
    }
  }
}
