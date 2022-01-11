/** add property */
let user = {}

user.height = 200
user['weight'] = 80

console.log(user.height, user.weight) // 200 80


/** delete property */
delete user.weight
console.log(user.weight) // undefined

//
console.log('height' in user) // true
console.log('weight' in user) // false

//
for(let key in user) console.log(user[key]) // 200

//
user.name = 'parker'
console.log(Object.keys(user))   // [ 'height', name ]
console.log(Object.values(user)) // [200, 'parker']
console.log(Object.entries(user)) // [ [ 'height', 200 ], [ 'name', 'parker' ] ]


/** function property */
user = {
    greet: function() { console.log('hello') }
}

user = {
    greet: () => console.log('hello')
}

user = {
    greet() {
        console.log('hello')
    }
}

user.greet() // hello


/** optional chaining: node 14.x 이상 */ 
// ?. 앞의 값이 null || undefiend 이면 undefined를 return 한다.
user = {}
let address = {}
user.address = address
address.street = 'sejong'
console.log(user.address.street) // sejong
console.log(user.city) // undefined

//
let street
// street = user.city.street // TypeError: Cannot read properties of undefined (reading 'street')
street = user?.city?.street
console.log(street)  // undefined
// user?.address = 'sejong' // SyntaxError: Invalid left-hand side in assignment

//
user = null
// user.greet() // TypeError: Cannot read properties of null (reading 'greet')
user = undefined
// user.greet() // TypeError: Cannot read properties of undefined (reading 'greet')
user?.greet() // undefiend 가 return 되고 에러 없이 끝난다.

//
user = {}
// user.greet() // TypeError: user.greet is not a function
user.greet?.() // undefiend 가 return 되고 에러 없이 끝난다.