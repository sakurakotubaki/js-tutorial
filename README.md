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