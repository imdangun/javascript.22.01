/** arithmetic operator */
let val = 1 + 2 * 3 / 2
console.log(5 % 2, 4 ** 2, 4 ** (1/2)) // 1 16 2


/** incrementing */
let i = 1
console.log(++i, i++) // 2 2


/** concatenation */
let foo = 'hello'
let bar = 'world'
console.log(foo + ' ' + bar) // hello world
console.log(1 + '2', '1' + '2') // 12 12

// unary plus operator
console.log(1 + +'2') // 3


/** logical */
console.log(1 || 0, 0 || 1) // 1 1
console.log(1 && 0, 0 && 1) // 0 0
console.log(1 && 2, 2 && 1) // 2 1

// foo && do(foo)
// bar = baz || createBar()


/** assignment operator */
console.log()
let c = 3 - (a = 1 + 2)
console.log(c) // 0

let d = 2
d *= 2
console.log(d) // 4


/** comparison operator */
console.log() 
console.log('2' > 1, '01' == 1, false == 0, '0' == 0, '' == false) // true true true true true
console.log(true > 1) // false

// equivalent: indentical 외의 비교 연산자는, 피연산자의 타입을 number 로 통일시킨다.
console.log(1 == '1', 1 != '1') // true false

// identical
console.log(1 === '1', 1 !== '1') // flase true

// uncode 값으로 비교한다.
console.log('z' > 'a', 'ac' > 'ab', 'bee' > 'be', 'a' > 'A') // true true true true

console.log(null > 0, null >= 0, null == 0) // false true false
console.log(undefined > 0, undefined >= 0, undefined == 0) // false false false
console.log(NaN > 0, NaN >= 0, NaN == 0) // false flase false

console.log(undefined == undefined, null == null, NaN == NaN) // true true false