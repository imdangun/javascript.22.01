let obj = {}

console.log(obj.__proto__) // [Object: null prototype] {}
console.log(obj.__proto__ == Object.prototype) // true

obj = new Object()
console.log(obj.__proto__) // [Object: null prototype] {}
console.log(Object.prototype.__proto__) // null

console.log(obj.toString()) // [object Object]

//
let arr1 = [1, 2]
let arr2 = new Array(1, 2)
console.log(arr1.__proto__ == arr2.__proto__)  // true
console.log(arr1.__proto__ == Array.prototype) // true

console.log(Array.prototype.__proto__) // [Object: null prototype] {}
console.log(Object.prototype)          // [Object: null prototype] {} 
console.log(Array.prototype.__proto__ == Object.prototype) // true