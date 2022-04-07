let msg: string = 'hello'
// msg = 1 // error

let val: number = 1
let nullableStr: string | null = null // A | B : union type
nullableStr = 'Hi'
// nullableStr = undefined // error

let undefinedOrNumber: undefined | number
undefinedOrNumber = 10
undefinedOrNumber = undefined

let numberOrStringOrNull: number | string | null = null
numberOrStringOrNull = 1
numberOrStringOrNull = 'Bye'
numberOrStringOrNull = null

let isCompleted: boolean = true
isCompleted = false
// isCompleted = 0 // error

let anyValue: any = null
anyValue = undefined
anyValue = 1
anyValue = 'hello'

// type 추론
let a = 1
let b = 'b'
let c = true