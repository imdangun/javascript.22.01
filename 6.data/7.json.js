/** serializing */
let user = {
    name: 'kelly',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css'],
    wife: null
}

let json = JSON.stringify(user)
console.log(json) // {"name":"kelly","age":30,"isAdmin":false,"courses":["html","css"],"wife":null}

//
user = {
    name: 'jessie',
    room: {
        number: 23,
        participants: ['john', 'ann']
    },
    greet() {
        return 'hello'
    },
    [Symbol('id')]: 123,
    color: undefined
}

console.log(JSON.stringify(user)) // {"name":"jessie","room":{"number":23,"participants":["john","ann"]}}

//
let room = {
    number: 23
}

let meetup = {
    title: 'conference',
    room
}

console.log(JSON.stringify(meetup)) // {"title":"conference","room":{"number":23}}

room.toJSON = function() { return this.number }
let s = JSON.stringify(meetup)
console.log(s) // {"title":"conference","room":23}
console.log(typeof s) // string


/** parsing */
let manJson = '{"name": "will", "age": 27, "mager": ["computer", "art"], "friend": {"name": "scott", "age": 23}}'
let man = JSON.parse(manJson)

console.log(man)
// {
//     name: 'will',
//     age: 27,
//     mager: [ 'computer', 'art' ],
//     friend: { name: 'scott', age: 23 }
// }
console.log(typeof man) // object
