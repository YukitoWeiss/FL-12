function pipe() {
    let sum = 0;
    sum = addOne(arguments[0]);
    if (arguments.length > 1) {
        for (let i = 2; i < arguments.length; i++) {
            sum++;
        }
        return sum;
    } else {
        return sum;
    }
}

function addOne(x) {
    return x + 1;
}

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));

