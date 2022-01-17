/** destructing assignment */
let arr = ['ilya', 'kantor']
let [name, surname] = arr
console.log(name, surname) // ilya kantor

let [one, two] = [1, 2, 3]
console.log(one, two) // 1 2

let [three, four] = [3]
console.log(three, four); // 3 undefined

[one, , three] = [1, 2, 3, 4]
console.log(one, three) // 1 3

//
let s = 'i am'
let [a, b, c] = s
console.log(a, b, c) // i   a

//
i = s.split(' ')
console.log(i); // [ 'i', 'am' ]

[a, b] = i
console.log(a, b); // i am

[a, b] = new Set(i)
console.log(a, b) // i am

//
let user = {};
[user.name, user.surname] = 'john smith'.split(' ')
console.log(user) // { name: 'john', surname: 'smith' }

//
user = {
    name: 'oscar',
    age: 21
}

let entries = Object.entries(user)
console.log(entries) // [ [ 'name', 'oscar' ], [ 'age', 21 ] ]

for(let [key, val] of entries) console.log(key, val)
// name oscar
// age 21

//
let map = new Map([
    ['name', 'edith'],
    ['age', 30]
])

for(let [key, val] of map) console.log(key, val)
// name edith
// age 30

//
let guest = 'jane'
let admin = 'pete';

[guest, admin] = [admin, guest]
console.log(guest, admin); // pete jane

//
[one, two, ...rest] = [1, 2, 3, 4]
console.log(one, two, rest); // 1 2 [ 3, 4 ]

//
[name, surname='anonymous'] = ['john']
console.log(name, surname) // john anonymous


/** pattern */
let options = {
    title: 'menu',
    width: 100,
    height: 200
}

let {title, height, width} = options
console.log(title, height, width); // menu 200 100

// {title, height, width} = options
({title, height, width} = options)

let {width: w, height: h} = options
console.log(w, h) // 100 200

let {title: t, ...other} = options
console.log(t, other) // menu { width: 100, height: 200 }

let {title: subject, wide=1000} = options
console.log(subject, wide) // menu 1000

//
let bread = {
    size: {
        width: 100,
        height: 200
    },
    items: ['cake', 'donut'],
    extra: true
}

let {size, items} = bread
console.log(size, items) // { width: 100, height: 200 } [ 'cake', 'donut' ]

//
let {
    size: {
        width: w2,
        height: h2
    },
    items: [item1, item2]
} = bread
console.log(w2, h2, item1, item2) // 100 200 cake donut

//
let menu = {
    title: 'menu',
    items: ['list', 'add'],
    expired: 10
}

function showMenu({title: name, items:[item1, item2]}) {
    console.log(name, item1, item2)
}

showMenu(menu) // menu list add