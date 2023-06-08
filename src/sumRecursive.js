// Implement a JavaScript function to find the sum of all elements in an array recursively
const sumRecursive = (arr) => {
  if (!arr.length) return 0;
  return arr[0] + sumRecursive(arr.slice(1));
};

console.log(sumRecursive([1, 2, 34, 5, 6]));
