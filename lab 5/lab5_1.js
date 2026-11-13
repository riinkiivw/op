'use strict';

function seq(fn) {
  return function (args) {
    if (typeof args === 'number') {
      return fn(args);
    }
    return seq(x => fn(args(x))); 
  };
}

console.log(seq(x => x + 7)(x => x * 2)(5)); 
console.log(seq(x => x * 2)(x => x + 7)(5));
console.log(seq(x => x + 1)(x => x * 2)(x => x / 3)(x => x - 4)(7));



