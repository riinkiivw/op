'use strict';

const createUser = (name, city) => {
    return {name, city};
};
const user = createUser('Marcus Aurelius', 'Rome');

console.log(user);