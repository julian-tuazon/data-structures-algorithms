function insertionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const currentItem = arr[i + 1];
    if (currentItem < arr[i]) {
      for (let k = 0; k < i + 1; k++) {
        if (currentItem < arr[k]) {
          arr.splice(i + 1, 1);
          arr.splice(k, 0, currentItem);
          break;
        }
      }
    }
  }
  return arr;
}

console.log(insertionSort([2,4,1,15,3,20,10]))
