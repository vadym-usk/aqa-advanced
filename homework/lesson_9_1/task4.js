const person = {
    firstName: "Name",
    lastName: "Surname",
    age: 18
};

person.email = "test@email.com";
delete person.age;

console.log(person);