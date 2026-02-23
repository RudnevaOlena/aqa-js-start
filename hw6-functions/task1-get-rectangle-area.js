//function declaration
console.log('Function declaration');
function getRectangleArea(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        throw new Error(`${width} and ${height} are invalid input: width and height must be positive numbers.`);
    }
    return width * height;
}
let result = getRectangleArea(7.5, 5);
console.log(result);
//
try {let result2 = getRectangleArea(null, 5);
    console.log(result2);
} catch (error) {
    console.log(error.message);
}
console.log('-----------------------------');
console.log('Function expression');
//function expression
const getRectangleArea2 = function(width, height) {
    if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        throw new Error(`${width} and ${height} are invalid input: width and height must be positive numbers.`);
    }
    return width * height;
};
let result3 = getRectangleArea2(8, 2.5);
console.log(result3);
//
try {let result4 = getRectangleArea2(5, undefined);
    console.log(result4);
} catch (error) {
    console.log(error.message);
}

//arrow function
console.log('-----------------------------');
console.log('Function expression');
const getRectangleArea3 = (width, height) => {
    if (typeof width !== 'number' || typeof height !== 'number' || isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        throw new Error(`${width} and ${height} are invalid input: width and height must be positive numbers.`);
    }
    return width * height;
}
let result5 = getRectangleArea3(5, 8);
console.log(result5);
//
try {let result6 = getRectangleArea3("text", 5);
    console.log(result6);
} catch (error) {
    console.log(error.message);
}   