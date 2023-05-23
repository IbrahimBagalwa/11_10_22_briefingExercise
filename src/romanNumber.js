function solution(roman) {
  const symbals = {
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
  roman.split("").reduce((a, b) => {
    let j = symbals[index] || 0;
    let k = symbals[b] || 0;
    count += j < k ? -j : j;
    index = b;
  });

  return count + symbals[roman[roman.length - 1]];
}
