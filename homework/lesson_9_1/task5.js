const users = [
    { name: "Name1", email: "test1@email.com", age: 18 },
    { name: "Name2", email: "test2@email.com", age: 20 }
];

for (const { name, email, age } of users) {
    console.log("Name: " + name + " | Email: " + email + " | Age: " + age);
}