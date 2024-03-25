/**
    Example 1:
    Input: N = 5
    Output: 0 1 1 2 3 5
    Explanation: 0 1 1 2 3 5 is the fibonacci series up to 5th term.(0 based indexing)
 */

function fibonacciusingRecursion(n) {
  if (n <= 1) return n;
  return fibonacciusingRecursion(n - 1) + fibonacciusingRecursion(n - 2);
}

console.log(fibonacciusingRecursion(5));
