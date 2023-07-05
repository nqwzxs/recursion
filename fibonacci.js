function fibs(num) {
  let arr = [0, 1];

  for (let i = 2; i < num; i++) {
    let a = arr[i - 1];
    let b = arr[i - 2];

    arr.push(a + b);
  }

  return arr;
}

console.log(fibs(8));

function fibsRec(num, arr = [0, 1]) {
  if (arr.length >= num) return arr;

  arr.push(arr.at(-1) + arr.at(-2));
  return fibsRec(num, arr);
}

console.log(fibsRec(8));