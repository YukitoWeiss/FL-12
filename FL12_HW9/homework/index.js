function convert() {
    let resultArr = [];

    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            resultArr.push(parseInt(arguments[i]));
        } else if (typeof arguments[i] === 'number') {
            resultArr.push('' + arguments[i]);
        }
    }

    return resultArr;
}

console.log(convert('1', 2, 3, '4'));

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        func(element);
    }
}

executeforEach([1, 2, 3], function (el) {
    console.log(el * 2);
});

function mapArray(arr, func) {
    let mapedArr = [];

    executeforEach(arr, function (element) {
        let result = func(element);
        mapedArr.push(result);
    });
    return mapedArr;
}

console.log(mapArray([2, '5', 8], function (el) {
    if (typeof el === 'string') {
        el = parseInt(el);
    }
    return el + 3;
}));

function filterArray(arr, func) {
    let filteredArr = [];

    executeforEach(arr, function (element) {
        if (func(element) === true) {
            filteredArr.push(element);
        }
    });
    return filteredArr;
}

console.log(filterArray([2, 5, 8], function (el) {
    return el % 2 === 0
}));

function flipOver(string) {
    let resultStr = '';
    for (let i = string.length - 1; i >= 0; i--) {
        resultStr += string[i];
    }
    return resultStr;
}

console.log(flipOver('hey world'));

function makeListFromRange(arr) {
    let maxNum = arr[1],
        minNum = arr[0],
        resultArr = [];
    for (let i = 0; i <= maxNum - minNum; i++) {
        resultArr.push(minNum + i);
    }
    return resultArr;
}

console.log(makeListFromRange([2, 7]));

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
];

function getArrayOfKeys(arr, value) {
    let keysArr = [];

    executeforEach(arr, function (element) {
        keysArr.push(element[value]);
    });
    return keysArr;
}

console.log(getArrayOfKeys(actors, 'name'));

function substitute(arr) {
    return mapArray(arr, function (element) {
        if (element < 30) {
            element = '*';
            return element;
        } else {
            return element;
        }
    });
}
console.log(substitute([58, 14, 48, 2, 31, 29]));

const date = new Date(2019, 0, 2);

function getPastDay(date, days) {
    let monthNames = [
        'Jan', 'Feb', 'Mar',
        'Apr', 'May', 'Jun', 'Jul',
        'Aug', 'Sep', 'Oct',
        'Nov', 'Dec'
    ],
        dayInMs = 86400000,
        resultDate = new Date(date.getTime() - days * dayInMs),
        day = resultDate.getDate(),
        monthIndex = resultDate.getMonth(),
        year = resultDate.getFullYear();

    return `${day}, (${day} ${monthNames[monthIndex]} ${year})`;
}

console.log(getPastDay(date, 1));
console.log(getPastDay(date, 2));
console.log(getPastDay(date, 365));

function formatDate(date) {
    let day = date.getDate(),
        monthIndex = date.getMonth(),
        year = date.getFullYear(),
        hours = date.getHours(),
        minutes = date.getMinutes();

    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    return `${year}/${monthIndex + 1}/${day} ${hours}:${minutes}`;
}

console.log(formatDate(new Date('6/15/2018 09:15:00')));
console.log(formatDate(new Date()));