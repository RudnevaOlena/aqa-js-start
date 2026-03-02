function divide(numerator, denominator) {
    if (denominator === 0 || isNaN(numerator) || isNaN(denominator)) {
        throw new Error("Invalid input: denominator cannot be zero and both numerator and denominator must be numbers.");
    }
    return numerator / denominator;
}
try {    console.log(divide(10, 2));
} catch (error) {
    console.error(error.message);
}
try {    console.log(divide(10, 0));
} catch (error) {
    console.error(error.message);
}
try {    console.log(divide(10, 'a'));
} catch (error) {
    console.error(error.message);
}
try {    console.log(divide('a', 2));
} catch (error) {
    console.error(error.message);
}
try {    console.log(divide(NaN, 5));
} catch (error) {
    console.error(error.message);
}   
try {    console.log(divide(5, "2"));
} catch (error) {    
    console.error(error.message);
}