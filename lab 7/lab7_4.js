'use strict';

const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const array3 = ['Beijing', 'Kyiv'];
const array4 = ['Kyiv', 'London', 'Baghdad'];

function difference(array1, array2) {
    return array1.filter(element => !array2.includes(element));
}

const result1 = difference(array1, array2);
const result2 = difference(array3, array4);

console.log(result1);
console.log(result2);
