'use strict';

const items = [true,'bye', 3.14, 7, -25,9, 'hello', 50, -100, 'Kyiv', 3055, 12.02, 'hello', 17, true, 'Anna', false, 'world', 20000];
const collection = {};

for (const item of items) {
    if (collection[typeof item] === undefined) {
        collection[typeof item] = 1;
    } else {
        collection[typeof item] += 1;
    }
}
console.log(collection);