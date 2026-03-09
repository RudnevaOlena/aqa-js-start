const numbersList = [1,10,14,2,4,5,43,34]
const arrNew = [...numbersList]
arrNew.sort((a, b) => a-b);
console.log(`The original array is: ${numbersList}`);
console.log(`The sorted array is: ${arrNew}`);