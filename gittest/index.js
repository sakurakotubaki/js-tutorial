// array: number[] = [1, 2, 3, 4, 5]
let array = [1, 2, 3, 4, 5];

// add value to array
array.push(6);
console.log(array);

// remove value from array
array.pop();
console.log(array);

// for in
for (let i in array) {
  console.log(array[i]);
}

// for of
for (let i of array) {
  console.log(i);
}