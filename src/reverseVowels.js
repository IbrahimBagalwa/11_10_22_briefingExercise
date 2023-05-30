function reverseVowel(str) {
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const strArr = str.split("");
  let start = 0;
  let end = str.length - 1;
  while (start < end) {
    if (vowels.includes(strArr[start]) && vowels.includes(strArr[end])) {
      [strArr[start], strArr[end]] = [strArr[end], strArr[start]];
      start++;
      end--;
    } else if (vowels.includes(strArr[start])) {
      end--;
    } else {
      start++;
    }
  }

  return strArr.join("");
}
