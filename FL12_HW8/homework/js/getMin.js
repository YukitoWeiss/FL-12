function getMin() {
    let minNum;
    let arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    arr.sort(function (a, b) {
        return a - b
    });
    minNum = arr[0];
    return minNum;
}

getMin(3, 0, -3);
