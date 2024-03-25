//print 1 to n using recursion
//print n to 1 using recursion

function nto1(n) {
  if (n === 0) return;
  console.log(n);
  n = n - 1;
  nto1(n);
}

function dp(n) {
  if (n === 0) return;
  n = n - 1;
  dp(n);
  console.log(n + 1);
}

function oneton(n, count) {
  if (count === n + 1) return;
  console.log(count);
  count = count + 1;
  oneton(n, count);
}

nto1(5);
console.log("********");
oneton(5, 1);
console.log("********");
dp(5);
