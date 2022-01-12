/** function is an object. */
function sayHi(myName, ...jobs) {
    console.log(`Hi, I am ${myName}.`)
}

sayHi('john') // Hi, I am john

console.log(typeof sayHi) // function
console.log(sayHi.name)   // sayHi
console.log(sayHi.length) // 1 // ...parameter 를 제외한 parameter 개수

//
let user = {
    sayHi() {},
    sayBye() {}
}

console.log(user.sayHi.name)  // sayHi
console.log(user.sayBye.name) // sayBye


/** custom property */
sayHi = function() {
    let count = 100;
    console.log('hi')
    sayHi.count++
}

sayHi()
console.log(`call count: ${sayHi.count}`) // NaN

sayHi.count = 0
sayHi() // hi
sayHi() // hi
console.log(`call count: ${sayHi.count}`) // 2