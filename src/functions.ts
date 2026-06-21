function getUserStatus(name: string, isOnline: boolean): string {
  return isOnline
    ? `User ${name} is online`
    : `User ${name} is offline`
}

const user = getUserStatus('Val', false)
console.log(user);

// ========
const calculateDiscount = function (price: number, discount: number): number {
  const discountAmount = price * discount / 100

  return discountAmount
}
console.log(calculateDiscount(100, 20));
console.log(calculateDiscount(250, 10));
console.log(calculateDiscount(500, 50));

// =======
const isAdult = (age: number): boolean => {
  if (age < 0) throw new Error("The age does not exist!");

  return age >= 18
}
console.log(isAdult(20));
console.log(isAdult(18));
console.log(isAdult(16));

// ========
function processNumber(value: number, callback: (num: number) => number): number {
  return callback(value)
}

const double = (num: number): number => {
  return num * 2
}

const square = (num: number): number => {
  return num ** 2
}

const triple = (num: number): number => {
  return num * 3
}

console.log(processNumber(5, double));
console.log(processNumber(5, square));
console.log(processNumber(5, triple));


// =======
function transformText(text: string, callback: (value: string) => string): string {
  return callback(text)
}

const toUpperCase = (value: string) => {
  return value.toUpperCase()
}

const toLowerCase = (value: string) => {
  return value.toLowerCase()
}

console.log(transformText('Hello Val', toUpperCase));
console.log(transformText('Hello Val', toLowerCase));

// ========
const users = ['john', 'kate', 'mike']

function handleUsers(users: string[], callback: (user: string) => string): string[] {
  const updateUsersArr: string[] = []

  users.forEach((user) => {
    const updateUser = callback(user)
    updateUsersArr.push(updateUser)
  });

  return updateUsersArr
}

const capitalizeUser = (user: string) => {
  return user[0].toUpperCase() + user.slice(1)
}
const upperCaseUser = (user: string) => {
  return user.toUpperCase()
}
console.log(handleUsers(users, capitalizeUser));
console.log(handleUsers(users, upperCaseUser));
console.log(users);


// =========
const users2 = ['John', 'Kate', 'Mike', 'Anna', 'Bob']

function filterUsers(users: string[], callback: (usre: string) => boolean): string[] {
  const updateUsersArr: string[] = []

  for (const user of users) {
    const isValid = callback(user)

    if (isValid) {
      updateUsersArr.push(user)
    }
  }

  return updateUsersArr
}

const startsWithA = (user: string): boolean => {
  const userNameToLowerCase = user.toLowerCase()
  return userNameToLowerCase[0] === 'a'
}

const shortName = (user: string): boolean => {
  return user.length < 4
}
console.log(filterUsers(users2, startsWithA));
console.log(filterUsers(users2, shortName));
