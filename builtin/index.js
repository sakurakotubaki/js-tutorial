// setTimeoutは、経過時間後にコールバック関数を実行する関数
setTimeout(() => {
    console.log('setTimeout');
}, 1000);

// setIntervalは、指定した時間間隔でコールバック関数を実行する関数
let count = 0;
const intervalId = setInterval(() => {
    console.log('setInterval');
    count++;
    if (count > 2) {
        clearInterval(intervalId);
    }
}, 1000);