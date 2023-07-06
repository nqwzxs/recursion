function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = arr.length / 2;
  const left = mergeSort(arr.slice(0, arr.length / 2));
  const right = mergeSort(arr.slice(arr.length / 2));

  let result = [];

  let leftEl = 0;
  let rightEl = 0;

  while (leftEl < left.length && rightEl < right.length) {
    if (left[leftEl] < right[rightEl]) {
      result.push(left[leftEl++]);
    } else {
      result.push(right[rightEl++]);
    }
  }
  
  while (leftEl < left.length) {
    result.push(left[leftEl++]);
  }

  while (rightEl < right.length) {
    result.push(right[rightEl++]);
  }
  
  return result;
}

console.log(mergeSort([4, 2, 1, 7, 3, 6, 5, 8]));