const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

const person1 = {
    firstName: "John",
    lastName: "Doe"
};

const person2 = {
    firstName: "Jane",
    lastName: "Smith"
};

// call
console.log(person.fullName.call(person1)); // John Doe
console.log(person.fullName.call(person2)); // Jane Smith

// apply
console.log(person.fullName.apply(person1)); // John Doe
console.log(person.fullName.apply(person2)); // Jane Smith