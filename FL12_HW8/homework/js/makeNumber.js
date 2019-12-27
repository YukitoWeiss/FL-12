function makeNumber(string) {
    let newString = '';
    for (let i = 0; i < string.length; i++) {
        if (isNaN(parseInt(string[i])) === false) {
            newString += string[i];
        }
    }
    return newString;
}

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');
