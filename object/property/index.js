// keyはstring文字列で管理されている
const array = 'array';
const person = {
    name: 'John',
    age: 30,
    greeting: function() {
        console.log('Hello');
    },
    address: {
        city: 'New York',
        country: 'USA'
    },
    [array]: [1, 2, 3]
};

console.log(person['array']); // [1, 2, 3]
console.log(person['address']['city']); // New York
console.log(person['address']['country']); // USA
console.log(typeof person['array']);