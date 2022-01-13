let user = {
    name: 'leo'
}

function greet() {
    console.log(`I am ${this.name}.`)
}

greet() // I am undefined.

let fn = greet.bind(user)
fn() // I am leo.

setTimeout(fn, 100) // I am leo.

//
user = {
    name: 'john',
    greet() {
        console.log(`I am ${this.name}.`)
    }
}

fn = user.greet.bind(user)
setTimeout(fn, 200) // I am john.

console.log(fn == user.greet) // false
console.log(fn == fn) // true