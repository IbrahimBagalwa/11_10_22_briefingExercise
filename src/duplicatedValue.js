// Implement a JavaScript function to remove duplicate elements from an array
const duplicatedElementInArray = (arr) => Array.from(new Set(arr));
console.log(duplicatedElementInArray([1, 2, 3, 3, 4, 2, 1, 2, 6, 5, 6, 5]));
