const n = 3;
for (let i = 0; i < n; i++) {
  let line = "";
  let count = 1;
  for (let j = n; j > i; j--) {
    line += count;
    count++;
  }

  console.log(line);
}

/**
 *
 * PATTERN IS THIS 1 2 3
 *                 1 2
 *                 1
 *
 *
 */
