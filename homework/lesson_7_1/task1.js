const handleNum = function (number, handleEven, handleOdd) {
    if (number % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }
    
    return;
}

const handleEven = function () {
    console.log('number is even');
}

const handleOdd = function () {
    console.log('number is odd');
}

handleNum(10, handleEven, handleOdd);