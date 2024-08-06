## リテラル
データ型の値をコードで直接記述するための構文をリテラルと呼ぶ

```js
let a = '1111';
let b = 22222;
let c = true;
```

Objectにメソッドを書く記法
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello</h1>
    <script>
        let person = {
            hello: function() {
                console.log('Hello');
            }
        };
        person.hello();
    </script>
</body>
</html>
```

オブジェクトリテラル内の省略記法
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello</h1>
    <script>
        let person = {
            hello() {
                console.log('省略記法');
            }
        };
        person.hello();
    </script>
</body>
</html>
```

演算子とオペランド
演算子は、`+`, `-`など
演算子によって処理される値は、オペランドと呼ぶ。1+1の1の数値の部分。


## DOMの操作をする
配列に値の追加と削除をするdemo

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <input type="text">
    </form>
    <button>Click me</button>
    <ul>
    </ul>
    <script>
       // 入力された値を習得して、配列に追加する。
       let array = [];
       document.querySelector('button').addEventListener('click', function() {
            const value = document.querySelector('input').value;
            array.push(value);
            console.log(array);
            updateList();
       });

       // 配列の値をリスト表示する関数
       function updateList() {
           const ul = document.querySelector('ul');
           ul.innerHTML = ''; // リストをクリアする
           array.forEach(function(value) {
               const li = document.createElement('li');
               li.textContent = value;
               ul.appendChild(li);
           });
       }
       // li要素をクリックしたら、その要素を削除する
         document.querySelector('ul').addEventListener('click', function(e) {
              if (e.target.tagName === 'LI') {
                const value = e.target.textContent;
                const index = array.indexOf(value);
                array.splice(index, 1);
                updateList();
              }
         });
    </script>
</body>
</html>
```