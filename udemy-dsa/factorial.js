function findFactorialRecursive(number) {
  if (number < 3) return number;
  return number * findFactorialRecursive(--number);
}

function findFactorialIterative(number) {
  if (number < 3) return number;
  let answer = 1;
  for (let i = number; i > 1; i--) {
    answer *= i;
  }
  return answer;
}

exports.findFactorialRecursive = findFactorialRecursive;
exports.findFactorialIterative = findFactorialIterative;
