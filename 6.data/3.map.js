let map = new Map()

map.set('1', 'hello')
map.set(1, {name: 'david'})
map.set(true, function fn() {})

console.log(map.get('1'), map.get(1), map.get(true)) // hello { name: 'david' } [Function: fn]
console.log(map.has('1'), map.has(1), map.has(true), map.has(false)) // true true true false
console.log(map.size) // 3

console.log(map.delete(1), map.delete(2)) // true false
console.log(map) // Map(2) { '1' => 'hello', true => [Function: fn] }

map.clear()
console.log(map) // Map(0) {}

//
map = new Map()
map.set(1, 'amella').set(2, 'avery').set(3, 'adela')
console.log(map) // Map(3) { 1 => 'amella', 2 => 'avery', 3 => 'adela' }


/** iterating */
let greens = new Map([
    ['cucumber', 500],
    ['tomato', 350],
    ['onion', 50]
])

for(let entry of greens)
    console.log(entry)
// [ 'cucumber', 500 ]
// [ 'tomato', 350 ]
// [ 'onion', 50 ]

let keys = greens.keys()
console.log(keys) // [Map Iterator] { 'cucumber', 'tomato', 'onion' }
for(let key of keys) console.log(key)
// cucumber
// tomato
// onion

let values = greens.values()
console.log(values) // [Map Iterator] { 500, 350, 50 }
for(let value of values) console.log(value)
// 500
// 350
// 50

greens.forEach((val, key, map) => console.log(key, val))
// cucumber 500
// tomato 350
// onion 50


/** object -> entries -> map */
let user = {
    name: 'aiden',
    age: 50
}

let entries = Object.entries(user)
console.log(entries) // [ [ 'name', 'aiden' ], [ 'age', 50 ] ]
console.log(new Map(entries)) // Map(2) { 'name' => 'aiden', 'age' => 50 }


/** map -> object */
map = new Map()
map.set('apple', 1)
map.set('orange', 2)
map.set('pear', 3)

fruits = Object.fromEntries(map)
console.log(fruits) // { apple: 1, orange: 2, pear: 3 }