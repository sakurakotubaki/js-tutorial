function createCounter() {
    let count = 0;  // 外部関数のローカル変数
    
    return () => {  // 内部関数がクロージャを形成
      count++;  // 外部関数のcount変数にアクセス
      return count;
    };
  }
  
  const counter = createCounter();
  console.log(counter());  // 1
  console.log(counter());  // 2
  console.log(counter());  // 3