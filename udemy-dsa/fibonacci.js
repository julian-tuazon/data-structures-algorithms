function fibonacciIterative(n) {
  if (n < 2) return n;
  let num1 = 0;
  let num2 = 1;
  for (let i = 1; i < n; i++) {
    const answer = num1 + num2;
    num1 = num2;
    num2 = answer;
  }
  return num2;
}

function fibonacciIterativeRecursive(n) {
  if (n < 2) return n;
  let num1 = 0;
  let num2 = 1;
  return (function recursiveFib(counter) {
    if (counter === 0) return num2;
    const currentSum = num1 + num2;
    num1 = num2;
    num2 = currentSum;
    return recursiveFib(--counter);
  })(n - 1);
}

exports.fibonacciIterative = fibonacciIterative;
exports.fibonacciIterativeRecursive = fibonacciIterativeRecursive;
