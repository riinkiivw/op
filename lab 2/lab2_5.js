'use strict';
const fn = () => {
    const objConst = { name: 'Valeriia' };
    let objLet = { name: 'Jay' };


objConst.name = 'Anna'; //поле змінюється, бо об'єкт - посилання, а не константа
objLet.name = 'Evan'; //поле змінюється, бо об'єкт - посилання, а не константа

// objConst = { name: 'Valeriia' }; // помилка, бо об'єкт - константа
objLet = {name: 'Evan'}; // спрацює, бо об'єкт - змінна

console.log(objConst);
console.log(objLet);
}
fn();