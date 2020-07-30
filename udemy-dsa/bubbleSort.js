function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = 0; k < arr.length - 1 - i; k++) {
      if (arr[k] > arr[k + 1]) {
        const temp = arr[k];
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }
  }
  return arr;
}
