'use strict';

const range = function(start, end) {
const array = [];
for (let i = start; i <= end; i++){
    if (i % 2 !== 0) {
        array.push(i);
    }
}
return array;
};
console.log(range(15, 30));