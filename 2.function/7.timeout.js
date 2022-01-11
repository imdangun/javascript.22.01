function sayHi() {
    console.log('Hi')
}

setTimeout(sayHi, 1000) // Hi

//
function greet(phrase, who) {
    console.log(phrase, who)
}

setTimeout(greet, 2000, 'hello', 'knox') // hello knox

//
let timeId = setTimeout(() => console.log('hoo'), 3000)
clearTimeout(timeId)