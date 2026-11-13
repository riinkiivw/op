'use strict';

function sum(...args) {
    return args.reduce((e, item) => e += item, 0);
    
}

console.log(sum(1, 2, 3));