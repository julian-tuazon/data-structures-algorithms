function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minValue = arr[i];
    let minIndex = i;
    for (let k = i + 1; k < arr.length; k++) {
      if (minValue > arr[k]) {
        minValue = arr[k];
        minIndex = k;
      }
    }
    arr[minIndex] = arr[i];
    arr[i] = minValue;
  }
  return arr;
}
