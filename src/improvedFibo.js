// Implement a JavaScript function to calculate the Fibonacci sequence up to a given number
function fibo(n, memo = {}) {
  if (n < 2) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibo(n - 1, memo) + fibo(n - 2, memo);
  return memo[n];
}
console.log(fibo(1000));
