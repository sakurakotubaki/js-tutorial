const array = new Array(1, 2, 3, 4, 5);
console.log(array);

// 配列の末尾に要素を追加する
array.push(6);
console.log(array);

// 配列の末尾の要素を削除する
array.pop();
console.log(array);

// ２以上の要素を取得する
let two = array.filter((a) => {
    return a >= 2;
});
console.log(two);