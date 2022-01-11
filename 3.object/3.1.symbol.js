/** symbol: unique identifier */
let id = Symbol()
let id1 = Symbol('id')
let id2 = Symbol('id')

console.log(id, id1, id2) // Symbol() Symbol(id) Symbol(id)

console.log(id1 == id2) // false

console.log(id.toString()) // Symbol()
console.log(typeof id)     // symbol

console.log(id1.description, id2.description, id.description) // id id undefined


/** hidden property */
let user = {
    name: 'neo'
}

let userId = Symbol('userId')
user.userId = 1
user[userId] = 2

console.log(user.name, user.userId, user[userId]) // neo 1 2

for(let key in user) console.log(key)
// name
// userId

console.log(Object.keys(user)) // [ 'name', 'userId' ]


/** global symbol registry */
// 해당 description 을 가진 symbol 이 있으면, 기존 symbol을, 없으면, 새로운 symbol을 return 한다.
id1 = Symbol.for('id')
id2 = Symbol.for('id')
console.log(id1 == id2) // true

let key = Symbol.keyFor(id1)
console.log(key, typeof key) // id string

//
id1 = Symbol.for('name') // global symbol
id2 = Symbol('name')     // local symbol
console.log(id1 == id2)  // false

console.log(Symbol.keyFor(id1), Symbol.keyFor(id2)) // name undefined