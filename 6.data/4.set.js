let set = new Set()

let user1 = {name: 'john'}
let user2 = {name: 'pete'}

set.add(user1).add(user2).add(user1)
console.log(set) // Set(2) { { name: 'john' }, { name: 'pete' } }

//
console.log(set.size) // 2
console.log(set.has(user1), set.has(user2), set.has({})) // true true false

//
console.log(set.delete(user1)) // true
console.log(set) // Set(1) { { name: 'pete' } }


/** iterating */
set.add(user1)

for(let user of set) console.log(user)
// { name: 'pete' }
// { name: 'john' }

set.forEach((val) => console.log(val))
// { name: 'pete' }
// { name: 'john' }

//
set = new Set([1, 2, 3])
console.log(set) // Set(3) { 1, 2, 3 }

set = new Set('hello')
console.log(set) // Set(4) { 'h', 'e', 'l', 'o' }


/** set -> array */
let arr = Array.from(set)
console.log(arr) // [ 'h', 'e', 'l', 'o' ]