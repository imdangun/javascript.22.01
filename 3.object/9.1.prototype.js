let animal = {
    isAlive: true
}

function Rabbit(name) {
    this.name = name
}

console.log(Rabbit.prototype) // {}

let rabbit = new Rabbit('black')
console.log(rabbit.isAlive) // undefined

//
Rabbit.prototype = animal
console.log(Rabbit.prototype) // { isAlive: true }

rabbit = new Rabbit('white')
console.log(rabbit.isAlive)   // true

//
function Duck(name) {
    this.name = name
}

console.log(Duck.prototype) // {}
console.log(Duck.prototype.constructor) // [Function: Duck]
console.log(Duck.prototype.constructor == Duck) // true

let duck = new Duck('duck')
console.log(duck.__proto__) // {}
console.log(duck.__proto__.constructor) // [Function: Duck]

let duck2 = new Duck('duck2')
console.log(duck2.__proto__ == duck.__proto__) // true

let duck3 = new duck.__proto__.constructor('duck')
duck3 = new duck.constructor('duck')

// https://ko.javascript.info/prototypes