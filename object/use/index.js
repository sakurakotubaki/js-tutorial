const person = {
    name: 'John',
    age: 30,
    greeting: function() {
        console.log('Hello');
    }
};

person.greeting(); // Hello
// valueを変更する
console.log(person.name = 'Oliver');
console.log(person.age = 25);
// valueを追加する
console.log(person.job = 'developer');
console.log(person);
// valueを削除する
delete person.age;
console.log('ageを削除');
console.log(person);