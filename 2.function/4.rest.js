function add(a, b) {
    return a + b
}

console.log(add(1, 2, 3)) // 3


/** rest parameter */
add = function(...args) {
    let tot = 0
    for(let arg of args) tot += arg
    return tot
}

console.log(add(1), add(1, 2, 3)) // 1 6

// ... 는 마지막에 선언해야 한다.
function printName(firstName, lastName, ...titles) {
    console.log(firstName, lastName)               // adam smith
    console.log(titles[0], titles[1], titles[2])   // operator consul undefined
    console.log(titles.length)                     // 2
}

printName('adam', 'smith', 'operator', 'consul')

//
function showName() {
    console.log(arguments.length)
    console.log(arguments[0], arguments[1])
}

showName()
// 0
// undefined undefined
showName('erica', 'terry')
// 2
// erica terry


/** spread */
console.log(Math.max(1, 2, 3)) // 3

let arr = [1, 2, 3]
console.log(Math.max(arr))    // NaN
console.log(Math.max(...arr)) // 3

let arr2 = [4, 5, 6]
console.log(...arr, ...arr2) // 1 2 3 4 5 6
console.log(Math.max(...arr, ...arr2)) // 6
console.log(Math.max(0, ...arr, 7, ...arr2, 8)) // 8

arr = [0, ...arr2, 9]
console.log(arr) // [ 0, 4, 5, 6, 9 ]