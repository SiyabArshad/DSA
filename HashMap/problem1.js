// Find the highest/lowest frequency element
/**
Example 1:
Input: array[] = {10,5,10,15,10,5};
Output: 10 15
Explanation: The frequency of 10 is 3, i.e. the highest and the frequency of 15 is 1 i.e. the lowest.
 */
function convertArrtoHashMap(arr = []) {
  let hashmap1 = new Map();
  arr.forEach((item, index) => {
    if (!hashmap1.has(item)) {
      hashmap1.set(item, 1);
    } else {
      hashmap1.set(item, hashmap1.get(item) + 1);
    }
  });
  return hashmap1;
}

let maxFrequency = function (nums) {
  const map = convertArrtoHashMap(nums);
  let temp = 0;
  let ans = 0;
  map.forEach((value, key) => {
    if (value > temp) {
      temp = value;
      ans = key;
    }
  });
  return ans;
};

console.log(maxFrequency([10, 5, 10, 15, 10, 5]));
