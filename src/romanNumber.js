function solution(roman) {
  const symbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let count = 0;
  let index = roman[0];
  roman.split("").reduce((_, acc) => {
    let firstIndexInput = symbols[index] || 0; // first value of the input that is provide
    let lastIndexInput = symbols[acc] || 0;

    count +=
      firstIndexInput < lastIndexInput ? -firstIndexInput : firstIndexInput;
    index = acc;
  });

  return count + symbols[roman[roman.length - 1]];
}
