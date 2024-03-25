/**
    Example 1:
    Input: N=5
    Output: 15
    Explanation: 1+2+3+4+5=15
*/
function SumofNnumber(n, sum) {
  if (n === 0) {
    return sum; // Return the sum when n becomes 0
  }
  sum = sum + n;
  n = n - 1;
  return SumofNnumber(n, sum);
}

console.log(SumofNnumber(5, 0));
