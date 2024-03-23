const n = 3;
for (let i = 0; i < n; i++) {
  let line = "";
  for (let j = 0; j < n - i - 1; j++) {
    line += "0";
  }
  for (let j = 0; j < 2 * i + 1; j++) {
    line += "*";
  }
  for (let j = 0; j < n - i - 1; j++) {
    line += "0";
  }

  console.log(line);
}

/**
 *
 * PATTERN IS THIS       *
 *                      ***
 *                     ******
 *note 0 for space
 *
 */
