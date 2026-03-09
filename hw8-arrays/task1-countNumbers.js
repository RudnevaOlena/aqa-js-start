const numbers = [2, -5, 0, 7, -3, 0, 10, -8];
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] !== 'number') {
        throw new Error("Invalid input: all elements must be numbers.");
    }
    numbers[i] == 0 ? zeroCount++ : numbers[i] > 0 ? positiveCount++ : negativeCount++;
}
console.log( `Amount of positive numbers: ${positiveCount}\n`+`Amount of negative numbers: ${negativeCount}\n`
    +`Amount of zero numbers: ${zeroCount}`);


