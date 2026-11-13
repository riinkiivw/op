'use strict';

function sum(...args) {
    let b = 0;
    for (const item of args) {
        b += item;
        
    }
    return b;
}

console.log(sum(1, 2, 3));