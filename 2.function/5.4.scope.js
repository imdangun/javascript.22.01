// sayHi() // ReferenceError: Cannot access 'name' before initialization

let name = 'neo'

sayHi() // Hi, neo
// sayHello() // ReferenceError: Cannot access 'sayHello' before initialization

function sayHi() {
    console.log('Hi,', name)
}

const sayHello = function() {
    console.log('Hello,', name)
}

sayHi()    // Hi, neo
sayHello() // Hello, neo