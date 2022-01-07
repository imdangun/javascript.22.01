/** function declaration */
function greet() {
    console.log('hello')
}

greet() // hello


/** function expression */
let salute = function() {
    console.log('hi')
}
salute() // hi
console.log(salute) // [Function: salute]

//
let sayHello = function(user, greeting) {
    return `${greeting}, ${user}`
}
console.log(sayHello('rebecca', 'hello')) // hello, rebecca

//
const sayHi = function() {
    console.log('HI')
}
const say = sayHi
say() // HI

//
let shout = function() {
    return function() {
        console.log('yoo hoo')
    }
}
let speak = shout()
speak(); // yoo hoo

//
(function() {
    console.log('earth')
})()

//
let myFn = function(fn) {
    const result = fn()
    console.log(result)
}

// myFn(1) // error
myFn(function() {
    return 'moon'
}) // moon

let argFn = function() {
    return 'star'
}
myFn(argFn) // star


/** default parameter */
let showMsg = function(from, msg='no message') {
    console.log(`${from}: ${msg}`)
}

showMsg('trinity', 'follow rabbit') // trinity: follow rabbit
showMsg('trinity') // trinity: no message