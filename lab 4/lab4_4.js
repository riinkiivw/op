'use strict';

function sum(...args) {
    if (args.length === 0) {
        return 0;
    }
    let d = 0;
    let i = 0;
    do {
        d += args[i];
        i++;
    } 
    while (i < args.length);
    return d;
}

console.log(sum(1, 2, 3));