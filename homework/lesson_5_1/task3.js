const number = 5;

console.log('For:');
for (let i = 1; i < 11; i++) {
    console.log(number + ' x ' + i + ' = ' + (number * i));
}

console.log('\nWhile:');

let i = 1;
while (i < 11) {
    console.log(number + ' x ' + i + ' = ' + (number * i));
    i++;
}