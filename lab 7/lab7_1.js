'use strict';

const array1 = [1, 2, 3, 4, 5, 6, 7];
const array2 = ['Kyiv', 'Beijing', 'Lima', 'Amsterdam'];

function removeElement(array, item) {
    const index = array.indexOf(item);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return array;
}

removeElement(array1, 5);
removeElement(array2, 'Lima');
removeElement(array2, 'Berlin');

console.log(array1); 
console.log(array2); 

