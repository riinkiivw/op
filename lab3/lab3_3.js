'use strict';

const ipToInt = (ip = '127.0.0.1') =>
  ip.split('.').map(Number).reduce((acc, byte) => (acc << 8) + byte, 0);

console.log(ipToInt('10.0.0.1'));     
console.log(ipToInt('192.168.1.10'));     
console.log(ipToInt()); 