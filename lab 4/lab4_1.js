'use strict';

function sum(...args) {
  let a = 0;
  for (let i = 0; i < args.length; i++) {
    a += args[i];
  }
  return a;
}

console.log(sum(1, 2, 3));
