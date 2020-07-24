function reverseStringIteratively(str) {
  if (!str) return '';
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

function reverseStringRecursively(str) {
  if (!str) return '';
  return str[str.length - 1] + reverseStringRecursively(str.slice(0, str.length - 1));
}

exports.reverseStringIteratively = reverseStringIteratively;
exports.reverseStringRecursively = reverseStringRecursively;
