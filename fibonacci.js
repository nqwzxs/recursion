function fibs(num) {
  let arr = [0, 1, 1];

  for (let i = 3; i < num; i++) {
    let a = arr[i - 1];
    let b = arr[i - 2];

    arr.push(a + b);
  }

  return arr;
}

console.log(fibs(8));