'use strict';

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = ['Kyiv', 'Beijing', 'Lima', 'Amsterdam'];

function removeElements(array, ...elements) {
    elements.forEach(element => {
        const index = array.indexOf(element);
        if (index !== -1) {
            array.splice(index, 1);
        }
    });
    return array;
}

removeElements(array1, 5, 1, 6);
removeElements(array2, 'Lima', 'Berlin', 'Kyiv');

console.log(array1);
console.log(array2);

