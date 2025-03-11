// Objectをコピーする方法
const name = 'apple';
const price = 180;
// apple, 180を持つオブジェクトを作成
const fruit = {
    name,
    price
};
// apple, 180を持つオブジェクトをコピー
const item = {
    ...fruit
};
// コピーしたオブジェクトを表示
console.log(item); // { name: 'apple', price: 180 }
// コピーしたオブジェクトと比較するが同じものではない
console.log(fruit === item); // false