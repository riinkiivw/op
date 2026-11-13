'use strict';

function sum(...args) {
  let c = 0;
  let i = 0;
  while (i < args.length) {
    c += args[i];
    i++;
  }
  return c;
}

console.log(sum(1, 2, 3));

