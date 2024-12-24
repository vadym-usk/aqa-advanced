let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

for (const arrayElement of numbers) {
    if (arrayElement > 0) positiveCount += 1;
    else if (arrayElement < 0) negativeCount += 1;
    else zeroCount += 1;
}

console.log('Positive count: ' + positiveCount);
console.log('Negative count: ' + negativeCount);
console.log('Zero count: ' + zeroCount);