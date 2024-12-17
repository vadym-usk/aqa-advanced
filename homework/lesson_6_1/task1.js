// Function Declaration
function rectangleSquareDeclaration(width, height) {
    return width * height;
}

// Function Expression
const rectangleSquareExpression = function(width, height) {
    return width * height;
}

// Concise Arrow Function Expression
const rectangleSquareArrow = (width, height) => width * height;

console.log(rectangleSquareDeclaration(5, 10));
console.log(rectangleSquareExpression(6, 10));
console.log(rectangleSquareArrow(7, 10));