let arr = new Array(1, 'hello', true, {age: 3}, function fn(){}, class A{})
console.log(arr) // [ 1, 'hello', true, { age: 3 }, [Function: fn], [class A] ]

arr = [null, undefined, NaN]
console.log(arr) // [ null, undefined, NaN ]

//
arr = []
arr[0] = 'a'
arr[2] = 'c'

console.log(arr)    // [ 'a', <1 empty item>, 'c' ]
console.log(arr[0]) // a
console.log(arr[1]) // undefined

console.log(arr.length) // 3

//
let matrix = [
    [1, 2],
    [3, 4]
]

//
let a = [1, 2]
let b = [2, 3]
let c = a.concat(b)
console.log(c) // [ 1, 2, 2, 3 ]


/** stack: FILO == LIFO */
arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr) // [ 1, 2, 3 ]
console.log(arr.pop()) // 3
console.log(arr) // [ 1, 2 ]


/** queue: FIFO == LILO */
arr = []
arr.push(1)
arr.push(2)
arr.push(3)

console.log(arr) //  [1, 2, 3 ]
console.log(arr.shift()) // 1
console.log(arr) // [ 2, 3 ]


/** */
arr = [1, 2, 3]
arr.reverse()
console.log(arr) // [ 3, 2, 1 ]

//
a = [0, 1, 2]
b = a.slice(1)
console.log(b, a) // [ 1, 2 ] [ 0, 1, 2 ]

//
arr = [0, 7, 8, 5]
arr.splice(0, 2, 1, 2, 3, 4)
console.log(arr) // [ 1, 2, 3, 4, 8, 5 ]

//
arr = ['a', 'b', 'c']
console.log(arr.indexOf('b')) // 1

arr.splice(arr.indexOf('b'))
console.log(arr) // [ 'a' ]

arr = ['a', 'b', 'c']
arr.splice(arr.indexOf('b'), 1)
console.log(arr) // [ 'a', 'c' ]

arr = ['a', 'b', 'c', 'b']
arr.splice(arr.indexOf('b'), 1)
console.log(arr) // [ 'a', 'c', 'b' ]

//
arr = [4, 3, 1, 2]
let s = arr.sort()
console.log(arr, s) // [ 1, 2, 3, 4 ] [ 1, 2, 3, 4 ]
//과제: s 가 arr 인지, 새로운 배열 객체인지를 확인하라.
console.log(s == arr) // true

// sort 는 원소를 string 으로 취급한다.
arr = [8, 11, 22, 23, 9]
console.log(arr.sort()) // [ 11, 22, 23, 8, 9 ] 

console.log(arr.sort((a, b) => a - b)) // [ 8, 9, 11, 22, 23 ]
console.log(arr.sort((a, b) => b - a)) // [ 23, 22, 11, 9, 8 ]


/** iterating */
arr = ['a', 'b', 'c']

for(let i = 0; i < arr.length; i++)
    console.log(arr[i])
// a
// b
// c

for(let key in arr) console.log(arr[key])
// a
// b
// c

for(let val of arr) console.log(val)
// a
// b
// c


/** forEach() */
function print(e) {
    console.log(e)
}

function print2(e, i) {
    console.log(`[${i}]: ${e}`)
}

function print3(e, i, arr) {
    arr[i] = e.toUpperCase()
}

arr = ['a', 'b']

console.log()
arr.forEach(print)
// a
// b

arr.forEach(print2)
// [0]: a
// [1]: b

arr.forEach(print3)
console.log(arr) // [ 'A', 'B' ]

//
arr = [1, 2, 3]
let arr2 = arr.map(e => e * 2)
console.log(arr, arr2) // [ 1, 2, 3 ] [ 2, 4, 6 ]

//
let group = {
    title: 'art',
    students: ['winston', 'cal', 'maritha'],
    list() {
        this.students.forEach(studentName => 
            console.log(this.title, ':', studentName))
    }
}

group.list()
// art : winston
// art : cal
// art : maritha


/** array -> string */
arr = ['hello', 'world', 2]
let greeting = arr.join()
console.log(greeting) // hello,world,2
console.log(typeof greeting) // string

console.log(arr.join('/')) // hello/world/2
// 과제: 'helloworld2' 를 얻어라.
console.log(arr.join('')) // helloworld2

//
arr = [1, 2, 3]
str = arr.toString()
console.log(str, '/', typeof str) // 1,2,3 / string

//
str = String(arr)
console.log(str, '/', typeof str) // 1,2,3 / string

//
str = JSON.stringify(arr)
console.log(str, '/', typeof str) // [1,2,3] / string


/** method */
// find()
const items = [
    {itemName: 'book', price: 1},
    {itemName: 'computer', price: 100},
    {itemName: 'book', price: 2}
]

const item = items.find(item => item.itemName == 'book')
console.log(item)

// filter()
const interest = items.filter((item, i) => item.itemName == 'book')
console.log(interest)

// map()
const elements = items.map((item, i) => 
    `<div>${item.itemName}: ${item.price}</div>`)
console.log(elements)

// reduce()
const totalPrice = items.reduce((total, item) => {
        total += item.price
        return total
    }, 0) // total = 0
console.log(totalPrice)

// some(), every()
let isExist = items.some(item => item.itemName == 'book')
isExist = items.every(item => item.itemName == 'book')
console.log(isExist)