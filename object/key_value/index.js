const person = {
    name: 'John',
    age: 30,
    greeting: function() {
        console.log('Hello');
    }
};

console.log(Object.keys(person));
console.log(Object.values(person));

// for in文でkeyを取得
for (const key in person) {
    console.log(key, person[key]);
}

// for of文でkey, valueを取得
for (const [key, value] of Object.entries(person)) {
    console.log(key, value);
}