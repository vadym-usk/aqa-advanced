// запуск тестов пример команды: node class-work/lesson_3_1/variables.js

const test1 = 'test1';
let test2 = "test2";
var test3 = `test3 ${test1}`;
let newtest = new String('test');

let test = `test2 ${test1}`

console.log(test1);
console.log(test2);
console.log(test3);
console.log(newtest);

let testNumber = 10;
let testNumber2 = "10";

console.log(testNumber);
console.log(testNumber2);

console.log(isNaN("testNumber")); // проверяет значение является ли оно числом, boolean

let a = null;
let b;

console.log(a);
console.log(b);

const bigInt = 12344356786543n;
let bigInt2 = BigInt(10);

console.log(bigInt);
console.log(bigInt2);

let symb = Symbol("test");
console.log(symb);