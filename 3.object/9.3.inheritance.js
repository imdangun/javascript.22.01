let animal = {
    name: 'animal'
}

animal = new Object()
animal.name = 'animal'

let rabbit = {
    age: 3
}

// 과제: 8~10 코드를 생성자를 이용해서 구현하라.
rabbit = new Object()
rabbit.age = 3

//
console.log(animal.__proto__) // [Object: null prototype] {}
console.log(rabbit.__proto__) // [Object: null prototype] {}

console.log(rabbit.name, animal.name) // undefined animal 

//
rabbit.__proto__ = animal
console.log(rabbit.__proto__) // { name: 'animal' }
console.log(rabbit.name, rabbit.age) // animal 3

//
animal = {
    walk() {
        console.log('animal walk.')
    }
}

rabbit = {
    __proto__: animal
}

rabbit.walk() // animal walk.

//
let user = {
    name: 'user'
}

let admin = {
    __proto__: user
}

console.log(admin.name) // user
admin.name = 'jonadan'
console.log(admin.name) // jonadan

//
animal = {
    name: 'animal',
    weight: 50,
    eat() {
        console.log(`${this.name} eat.`)
    }
}

rabbit = {
    name: 'rabbit',
    __proto__: animal
}

let lion = {
    name: 'lion',
    __proto__: animal
}

animal.eat() // animal eat.
rabbit.eat() // rabbit eat.
lion.eat()   // lion eat.

//
console.log(Object.keys(rabbit)) // [ 'name' ]

for(let key in rabbit) console.log(key)
// name
// weight
// eat

for(let key in rabbit) {
    let isOwn = rabbit.hasOwnProperty(key)
    if(isOwn) console.log(`child's key: ${key}`)
} // child's key: name


// 과제: 위 for block 을 expression 으로 refactoring 하라.
for(let key in rabbit) {
    rabbit.hasOwnProperty(key) && console.log(`child's key: ${key}`)
} // child's key: name