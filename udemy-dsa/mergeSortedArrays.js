function mergeSortedArrays(arr1, arr2) {
  const mergedArr = [];
  let i1 = 0;
  let i2 = 0;
  while (mergedArr.length !== (arr1.length + arr2.length)) {
    if (i1 >= arr1.length) {
      mergedArr.push(arr2[i2]);
      i2++;
    }
    else if (i2 >= arr2.length) {
      mergedArr.push(arr1[i1]);
      i1++;
    }
    else if (arr1[i1] < arr2[i2]) {
      mergedArr.push(arr1[i1]);
      i1++;
    }
    else if (arr1[i1] === arr2[i2]) {
      mergedArr.push(arr1[i1]);
      i1++;
      mergedArr.push(arr2[i2]);
      i2++;
    }
    else if (arr1[i1] > arr2[i2]) {
      mergedArr.push(arr2[i2]);
      i2++;
    }
  }
  return mergedArr;
}

exports.mergeSortedArrays = mergeSortedArrays;
