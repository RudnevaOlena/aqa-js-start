function handleNum (num, callbackeven, callbackodd) {
    (num % 2 === 0)?callbackeven(num):callbackodd(num);
}

function handleEven(num) {
    console.log(`${num}: Number is even`);
};
function handleOdd(num) {
    console.log(`${num}: Number is odd`);
};

handleNum(5, handleEven, handleOdd);
handleNum(12, handleEven, handleOdd);
handleNum(0, handleEven, handleOdd);
handleNum(-3, handleEven, handleOdd);
handleNum(-8, handleEven, handleOdd);

