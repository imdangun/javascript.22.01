let user1 = {
    name: 'isabel',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

let user2 = {
    name: 'jade',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

user1.greet() // I am isabel.
user2.greet() // I am jade.

//
let name = 'morpheus'

function greet() {
    console.log(`I am ${this.name}.`)
}

greet() // I am undefined.

greet.call(user1) // I am isabel.
greet.call(user2) // I am jade.

//
user2 = {
    name: 'colin'
}

user1.greet() // I am isabel.
// user2.greet() // TypeError: user2.greet is not a function

user1.greet.call(user2) // I am colin.