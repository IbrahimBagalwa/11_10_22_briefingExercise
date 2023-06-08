// Write a JavaScript function to convert a number to its binary representation
const decimalToBinary = (number) => {
  let binary = "";
  if (number == 0) return "0";
  for (let i = number; i > 0; i = Math.floor(i / 2)) {
    binary = (i % 2) + binary;
  }
  return binary;
};
console.log(decimalToBinary(224));
