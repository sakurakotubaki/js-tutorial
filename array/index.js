let arr = [1, 2, 3, 4, 5];
// [0]
console.log(arr[0]); // 1
// [1]
console.log(arr[1]); // 2
// count
console.log(arr.length); // 5

/*
iは、indexの略で、添字を表す変数名です。
*/
for (let i = 0; i < arr.length; i++) {
    arr[i] += 10;
}
console.log(arr); // [11, 12, 13, 14, 15]

/**
 * for in
 * key: オブジェクトのプロパティが１つずつ渡される。
 * obj: オブジェクトや配列を設定できます。
 */

// obj内で、プロパティ名がskipだけ加算せずスキップする。
const obj = {
    a: 1,
    b: 2,
    skip: 3,
    d: 4
};

for (let key in obj) {
    if (key === 'skip') {
        continue;
    }
    obj[key] += 10;
}