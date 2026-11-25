'use strict';

function unique(array) {
    const uniqueArray = [];
    array.forEach(element => {
        if (!uniqueArray.includes(element)) {
            uniqueArray.push(element);
        }
    });
    return uniqueArray;
}

const result1 = unique([2, 1, 1, 3, 2]);
const result2 = unique(['top', 'bottom', 'top', 'left']);

console.log(result1);
console.log(result2);
