/**
 * 配列の基本操作
 * push: 配列の末尾に要素を追加する
 * pop: 配列の末尾の要素を削除する
 * shift: 配列の先頭の要素を削除する
 * unshift: 配列の先頭に要素を追加する
 */
let woman = ['minn', 'yui'];
// 配列の末尾に要素を追加する
woman.push('Yukino');
console.log(woman);

// 配列の末尾の要素を削除する
woman.pop();
console.log(woman);

// 配列の先頭に要素を追加する
woman.unshift('Yukino');
console.log(woman);

// 配列の先頭の要素を削除する
woman.shift('Yukino');
console.log(woman);

// filterで、yuiを配列から取り出す。
let people = ['minn', 'yui31', 'yukino'];
let y = people.filter((p) => {
    return p === 'yui31';
});
console.log(y);

// reduceで、配列の合計を求める。
let p = ["1", "2", "3", "4", "5"];
let sum = p.reduce((prev, current) => {
    return prev + current;
});
console.log(sum);