// Write a function(s) that checks the level of nesting of an array. Then, use that function to flatten the array into a single-dimensional array.

const levelOfNestingArray = (arr) => {
  let countLevel = 0;
  for (let i = 0; i < arr.length; i++) {
    countLevel++;
  }
  return countLevel;
};

const nestedArray = [1, [2, [3, 4], 5], [6]];
const level = levelOfNestingArray(nestedArray);
const flatternArray = (arr) => arr.flat(level);

console.log(levelOfNestingArray(nestedArray));
console.log(flatternArray(nestedArray));
