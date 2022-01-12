/** factory function */
let makeUser = function(name, age) {
    return {
        name: name,
        age: age
    }
}

makeUser = function(name, age) {
    return {
        name,
        age
    }
}

console.log(makeUser('doris', 57)) // { name: 'doris', age: 57 }


/** constructor */
function User(name) {
    // this = {} // SyntaxError: Invalid left-hand side in assignment
    this.name = name
    this.greet = () => console.log(`I am ${this.name}.`)
    // return this
}

const user1 = new User('bob')
user1.greet() // I am bob.
console.log(Object.keys(user1)) // [ 'name', 'greet' ]

const user2 = new User('sarah')
user2.greet() // I am sarah.

//
let str = String(1)
console.log(typeof str) // string

str = new String(1)
console.log(typeof str) // object

//
let human = new function() {
    this.name = 'meg'
    this.age = 27
}
console.log(typeof human, human.name) // object meg

//
function BigUser() {
    this.name = 'amy'
    return {name: 'beth'}
}

function SmallUser() {    
    this.name = 'lorie'
}

console.log(new BigUser().name, new SmallUser().name) // beth lorie

console.log(BigUser().name, SmallUser()?.name) // beth undefined

//
const user = new Object()
console.log(user) // {}
user.age = 12


/** view object */
const person = Object.create(user)
console.log(person)     // {}
console.log(person.age) // 12
console.log(person == user) // false

person.name = 'mandarin'
console.log(user) // { age: 12 }