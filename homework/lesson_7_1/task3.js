const divide = function (numerator, denominator) {
    try {
        if (typeof numerator !== 'number' || typeof denominator !== 'number') {
            throw new Error('Numerator and Denominator should have `number` type!');
        }

        if (denominator === 0) {
            throw new Error('Division by zero is not allowed!');
        }

        console.log(numerator / denominator);
    } catch (error) {
        console.log('Caught an error:', error.message);
    } finally {
        console.log('Execution completed');
    }

    return;
}

divide(10, 5);
divide(10, 0);
divide('numerator', 5);
divide(10, 'denominator');