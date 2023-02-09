# Set-Matrix-Zeroes

Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

You must do it in place.

 

Example 1:

![mat1](https://user-images.githubusercontent.com/88260025/217837789-fd13188c-fc19-4444-baa7-a9393df092eb.jpg)

Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

Example 2:

![mat2](https://user-images.githubusercontent.com/88260025/217837987-3790babc-814b-442a-883b-e021715488cd.jpg)

Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
 

Constraints:

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-231 <= matrix[i][j] <= 231 - 1
