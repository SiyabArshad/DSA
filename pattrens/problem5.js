const N = 5;
let spaces = 2 * (N - 1);
for (let i = 0; i < N; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }
  for (let j = 0; j < spaces; j++) {
    process.stdout.write(" ");
  }
  for (let j = 0; j <= i; j++) {
    process.stdout.write("*");
  }

  console.log();
  spaces = spaces - 2;
}

/**

*        *
**      **
***    ***
****  ****
********** 
 
 */
