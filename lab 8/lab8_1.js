'use strict';

const obj = { a: 1, b: 2, c: 3 };

function iterate(obj, callback) {
    for (const [key, value] of Object.entries(obj)) {
        callback(key, value, obj);
    }
}
iterate(obj, (key, value, object) => {
    console.log({key, value, object});
});