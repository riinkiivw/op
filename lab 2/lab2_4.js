'use strict';


const average = (a,b) => (a + b) / 2;


const square = (x) => x * x;


const cube = (y) => y * y * y;



const calculate = () => {
    const array = [];
        for (let i = 0; i < 10; i++) {
            let a = square(i);
            let b = cube(i);

            let avrg = average(a, b);
            array.push(avrg);
        
    }
return array;
}
console.log(calculate());