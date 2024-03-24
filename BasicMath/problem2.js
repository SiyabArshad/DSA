//given number is armstrong or not
// 153
// 1^3+5^3+3^3=153

function isArmstrong(n) {
  const orignal = n;
  let count = 0;
  let temp = n;
  while (temp !== 0) {
    count = count + 1;
    temp = Math.floor(temp / 10);
  }
  let sumOfPowers = 0;
  while (n !== 0) {
    let digit = n % 10;
    sumOfPowers += Math.pow(digit, count);
    n = Math.floor(n / 10);
  }
  return orignal === sumOfPowers;
}

console.log(isArmstrong(153));
