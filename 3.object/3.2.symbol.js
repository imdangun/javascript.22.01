let age

function src() {
    let user = {
        name: 'amanda'
    }

    a(user)
    b(user)
}

function a(user) {
    user[Symbol('age')] = 12
    console.log(user) // { name: 'amanda', [Symbol(age)]: 12 }
}

function b(user) {
    console.log(Object.keys(user)) // [ 'name' ]
    console.log(user.name) // amanda
    console.log(user) // { name: 'amanda', [Symbol(age)]: 12 }
}

src()