const recursiveFunction = function (num) {
    if (num >= 0) {
        console.log(num);
        return recursiveFunction(num - 1);
    }
}

recursiveFunction(5);