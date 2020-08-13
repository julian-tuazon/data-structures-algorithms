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
    if (n in cache) return cache[n];
    if (n < 2) return n;
    cache[n] = inner(n - 1) + inner(n - 2);
    return cache[n];
  })(n);
}

function fibonacciTabulation(n) {
  if (n < 2) return n;
  const fiboSequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    fiboSequence.push(fiboSequence[i - 2] + fiboSequence[i - 1]);
  }
  return fiboSequence.pop();
}

exports.fibonacciIterative = fibonacciIterative;
exports.fibonacciRecursive = fibonacciRecursive;
exports.fibonacciMemoization = fibonacciMemoization;
exports.fibonacciTabulation = fibonacciTabulation;
