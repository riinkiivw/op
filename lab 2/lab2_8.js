'use strict';

const phoneBook = {
    'Anna': '+3801112233',
    'Valeriia': '+3804445566',
    'Jay': '+3807778899',
    'Evan': '+3800001111'
}
const findPhoneByName = (name) => {
    return phoneBook [name];
}

console.log(findPhoneByName('Valeriia'));
console.log(findPhoneByName('Jay'));