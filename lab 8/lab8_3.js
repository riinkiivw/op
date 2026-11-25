'use strict';

function contract(fn, ...types) {
    const argTypes = types.slice(0, -1);
    const resultType = types.at(-1);

    return function (...args) {
        for (let i = 0; i < argTypes.length; i++) {
            const expected = argTypes[i].name.toLowerCase();
            if (typeof args[i] !== expected) {
                throw new TypeError(`Argument ${i + 1} should be of type ${expected}`);
            }
        }

        const result = fn(...args);

        if (typeof result !== resultType.name.toLowerCase()) {
            throw new TypeError(`Result should be of type ${resultType.name.toLowerCase()}`);
        }

        return result;
    };
}

const add = (a, b) => a + b;
const addNumbers = contract(add, Number, Number, Number);
const res1 = addNumbers(2, 3);
console.dir(res1); 

const concat = (s1, s2) => s1 + s2;
const concatStrings = contract(concat, String, String, String);
const res2 = concatStrings('Hello ', 'world!');
console.dir(res2);