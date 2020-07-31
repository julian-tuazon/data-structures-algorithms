function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const middleIndex = Math.floor(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const mergedArray = [];
  let leftIndex = 0;
  let rightIndex = 0;
  for (let i = 0; i < left.length + right.length; i++) {
    if (leftIndex === left.length) {
      mergedArray.push(right[rightIndex++]);
    } else if (rightIndex === right.length) {
      mergedArray.push(left[leftIndex++]);
    } else if (left[leftIndex] < right[rightIndex]) {
      mergedArray.push(left[leftIndex++]);
    } else {
      mergedArray.push(right[rightIndex++]);
    }
  }
  return mergedArray;
}
