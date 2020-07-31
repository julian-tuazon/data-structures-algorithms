function quickSort(arr, low, high) {
  if (low < high) {
    const partitionIndex = partition(arr, low, high);
    quickSort(arr, low, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, high);
  }
}

function partition(arr, low, high) {
  const pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
  i++;
  arr[high] = arr[i];
  arr[i] = pivot;
  return i;
}
