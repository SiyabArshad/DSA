//reverse given number
// 153
// 351

function isArmstrong(n) {
  let ans = 0;

  while (n !== 0) {
    let digit = n % 10;
    ans = ans * 10 + digit;
    n = Math.floor(n / 10);
  }
  return ans;
}

console.log(isArmstrong(153));
