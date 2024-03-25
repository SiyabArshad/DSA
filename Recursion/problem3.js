/**
    Reverse Array using recursion
    Inp [1,2,3,4,5]:
    Output: [5,4,3,2,1]
*/
function reverseArray(arr, start, end) {
  if (start < end) {
    const temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    return reverseArray(arr, start + 1, end - 1);
  }
  return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5], 0, 4));
