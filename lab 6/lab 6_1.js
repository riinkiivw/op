'use strict';

const pipe = (...fns) => {
    for (const fn of fns) {
        if (typeof fn !== 'function') {
            throw new TypeError('All arguments must be functions');
        }
    }
    return (x) => fns.reduce((acc, fn) => fn(acc), x);
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
const x = f(5);
console.log(x); 

const f1 = pipe(inc, inc);
const y = f1(7);
console.log(y);

try {
    const f2 = pipe(inc, 7, cube);
    const z = f2(2);
    console.log(z);
} catch (e) {
    console.log('Error:', e.message);
}