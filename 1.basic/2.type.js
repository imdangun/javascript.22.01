/** string **/
let foo = "I am a string"
foo = 'So am I'
foo = `back tick`

foo = 'He said, "javascript is awesome"'
foo = "He said, \"javascript is awesome\""


/** number(int, float(64bit)) */
foo = 1
foo = 1.0

console.log(1 / 0)   // Infinity
console.log('a' / 1) // NaN(Not a Number)

foo = 1
console.log(isFinite(foo)) // true
foo = 'a'
console.log(isFinite(foo)) // false

foo = '1'
console.log(parseInt(foo) + 1) // 2

foo = 'a'     // NaN
foo = '100px' // 100
foo = '+1'    // 1
foo = '-1'    // -1
foo = '123456-7890123' // 123456
console.log(parseInt(foo)) 

foo = '1.6' 
console.log(parseInt(foo))   // 1
console.log(parseFloat(foo)) // 1.6

let a = Infinity * 2
let b = NaN * 2
console.log(a, b) // Infinity NaN

a = Infinity * NaN
console.log(a) // NaN


/** bigint: 2**53-1 bit 초과, 16자리 초과 */
foo = 1n


/** boolean **/
const okay = true
const fail = false


/** null **/
let val = null


/** undefined */
let val2
console.log(val2) // undefied
val2 = undefined


/** Symbol **/
let id = Symbol('id')
console.log(typeof id) // symbol


/** casting **/
val = 1
val = String(val)
console.log(typeof val) // string

val = '6' / '2'
console.log(val) // 3

val = false / true
console.log(val) // 0

val = '1'
val = Number(val)
console.log(typeof val) // number

console.log(Number('1'), Number(true)) // 1 1
console.log(Number(' '), Number(''), Number(null), Number(false)) // 0 0 0 0
console.log(Number('a'), Number(undefined)) // NaN NaN

console.log(Boolean(-1), Boolean('a'), Boolean('0'), Boolean(' ')) // true true true true
console.log(Boolean(0), Boolean(''), Boolean(null), Boolean(undefined), Boolean(NaN))  // false false false false false