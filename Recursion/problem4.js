/**
    find factorial of n using recursion
    n=3
    ans=3*2*1=6
*/
function findFactorial(n) {
  if (n === 0) return 1;
  return n * findFactorial(n - 1);
}

console.log(findFactorial(3));

//lets try approach 2
function findFactorial2(n, ans) {
  if (n === 1) return ans;
  return findFactorial2(n - 1, n * ans);
}

console.log(findFactorial2(3, 1));
