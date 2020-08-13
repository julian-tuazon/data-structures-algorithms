function fibonacciIterative(n) {
  if (n < 2) return n;
  let num1 = 0;
  let num2 = 1;
  for (let i = 1; i < n; i++) {
    const sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
}

function fibonacciRecursive(n) {
  if (n < 2) return n;
  return fibonacciRecursive(n - 2) + fibonacciRecursive(n - 1);
}

function fibonacciMemoization(n) {
  let cache = {};
  return (function inner(n) {
    if (n < 2) return n;
    if (cache[n]) return cache[n];
    return inner(n - 1) + inner(n - 2);
  })(n);
}

console.log(fibonacciMemoization(7));

exports.fibonacciIterative = fibonacciIterative;
exports.fibonacciRecursive = fibonacciRecursive;
