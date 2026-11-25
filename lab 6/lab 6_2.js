'use strict';

const compose = (...fns) => {
    const handlers = [];

    const f = (x) => {
        try {
            return fns.reduceRight((result, fn) => fn(result), x);
        } catch (e) {
            for (const handler of handlers) {
                handler(e);
            }
            return undefined;
        }
    };

    f.on = (event, handler) => {
        if (event === 'error') {
            handlers.push(handler);
        }
    };

    return f;
};

const add = x => x + 1;
const twice = x => x * 2;
const cube = x => x ** 3;
const error = x => {
    throw new Error('Something wrong');
};

const f = compose(add, twice, cube);
const x = f(5);
console.log(x); 

const f1 = compose(add, add);
const y = f1(7);
console.log(y); // 9

const f2 = compose(add, error, cube);
f2.on('error', e => console.log('Error:', e.message));
const z = f2(5);
console.log(z); 

