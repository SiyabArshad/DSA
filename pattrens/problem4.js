function pattern19(N) {
  // For the upper half of the pattern.

  // Initial spaces.
  let iniS = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 1; j <= N - i; j++) {
      process.stdout.write("*");
    }

    for (let j = 0; j < iniS; j++) {
      process.stdout.write(" ");
    }

    for (let j = 1; j <= N - i; j++) {
      process.stdout.write("*");
    }

    iniS += 2;
    console.log();
  }

  // For lower half of the pattern

  // Initial spaces.
  iniS = 2 * N - 2;
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }
    for (let j = 0; j < iniS; j++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write("*");
    }

    iniS -= 2;
    console.log();
  }
}

const N = 5;

pattern19(N);

/*
 **********
 ****  ****
 ***    ***
 **      **
 *        *
 *        *
 **      **
 ***    ***
 ****  ****
 **********
 */
