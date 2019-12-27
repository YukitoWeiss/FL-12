function countNumbers(string) {
    let newString = '';
    let counterObj = {};
    for (let i = 0; i < string.length; i++) {
        if (isNaN(parseInt(string[i])) === false) {
            newString += string[i];
        }
    }

    for (let j = 0; j < newString.length; j++) {
        if (!counterObj[newString[j]]) {
            counterObj[newString[j]] = 1;
        } else {
            counterObj[newString[j]]++;
        }
    }
    return counterObj;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers(''); 
