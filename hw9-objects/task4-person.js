const person = {
    firstName: "Name",
    lastName: "Surname",
    age: 1
};
person.email = "email@example.com";
delete person.age;
console.log(person);

