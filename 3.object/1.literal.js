/** object literal */
// key: string, symbol
// value: any type
let user = {
    name: 'frances',
    age: 70
}

user = {
    name: {
        first: 'bob',
        last: 'smith'
    },
    'nick name': 'tiger face',
    age: 13,
    interests: ['music', 'movie'],
    sing: () => console.log('lala')
}


/** read property */
console.log(user.name) // { first: 'bob', last: 'smith' }
console.log(user.name.first) // bob   /* chaining */
user.sing() // lala

// user.'nick name' // SyntaxError: Unexpected string
// user.nick name // SyntaxError: Unexpected identifier
console.log(user['nick name']) // tiger face
console.log(user['name']['first']) // bob


/** write property */
user.name.first = 'john'
user['age'] = 50
console.log(user.name.first, user.age) // john 50


/** [] */
let key = 'nick name'
console.log(user[key]) // tiger face
key = 'age'
console.log(user[key]) // 50

let man = {
    name : 'samuel',
    1: 'one',
    2: 'two'
}

// man.1
console.log(man['1']) // one