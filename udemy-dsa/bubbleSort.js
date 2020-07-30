function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] > arr[k]) {
        const temp = arr[i];
        arr[i] = arr[k];
        arr[k] = temp;
      }
    }
  }
  return arr;
}
