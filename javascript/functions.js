"use strict";
function getUserStatus(name, isOnline) {
    return isOnline
        ? `User ${name} is online`
        : `User ${name} is offline`;
}
const user = getUserStatus('Val', false);
console.log(user);
// ========
const calculateDiscount = function (price, discount) {
    const discountAmount = price * discount / 100;
    return discountAmount;
};
console.log(calculateDiscount(100, 20));
console.log(calculateDiscount(250, 10));
console.log(calculateDiscount(500, 50));
// =======
const isAdult = (age) => {
    if (age < 0)
        throw new Error("The age does not exist!");
    return age >= 18;
};
console.log(isAdult(20));
console.log(isAdult(18));
console.log(isAdult(16));
// ========
function processNumber(value, callback) {
    return callback(value);
}
const double = (num) => {
    return num * 2;
};
const square = (num) => {
    return num ** 2;
};
const triple = (num) => {
    return num * 3;
};
console.log(processNumber(5, double));
console.log(processNumber(5, square));
console.log(processNumber(5, triple));
// =======
function transformText(text, callback) {
    return callback(text);
}
const toUpperCase = (value) => {
    return value.toUpperCase();
};
const toLowerCase = (value) => {
    return value.toLowerCase();
};
console.log(transformText('Hello Val', toUpperCase));
console.log(transformText('Hello Val', toLowerCase));
// ========
const users = ['john', 'kate', 'mike'];
function handleUsers(users, callback) {
    const updateUsersArr = [];
    users.forEach((user) => {
        const updateUser = callback(user);
        updateUsersArr.push(updateUser);
    });
    return updateUsersArr;
}
const capitalizeUser = (user) => {
    return user[0].toUpperCase() + user.slice(1);
};
const upperCaseUser = (user) => {
    return user.toUpperCase();
};
console.log(handleUsers(users, capitalizeUser));
console.log(handleUsers(users, upperCaseUser));
console.log(users);
// =========
const users2 = ['John', 'Kate', 'Mike', 'Anna', 'Bob'];
function filterUsers(users, callback) {
    const updateUsersArr = [];
    for (const user of users) {
        const isValid = callback(user);
        if (isValid) {
            updateUsersArr.push(user);
        }
    }
    return updateUsersArr;
}
const startsWithA = (user) => {
    const userNameToLowerCase = user.toLowerCase();
    return userNameToLowerCase[0] === 'a';
};
const shortName = (user) => {
    return user.length < 4;
};
console.log(filterUsers(users2, startsWithA));
console.log(filterUsers(users2, shortName));
