class User {
    constructor(name) {
        this.name = name
    }

    introduce() {
        console.log(`I am ${this.name}.`)
    }
}

let user = new User('john')
console.log(user.name) // john
user.introduce() // I am john.

//
User = class {
    name
    age

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    introduce() {
        console.log(`${this.name} / ${this.age}`)
    }
}

new User('abel', 12).introduce() // abel / 12

//
User = class {   
    _age   

    set age(age) {
        if(age >= 10) this._age = age
        else this._age = 0
    }
   
    get age() {
        return this._age + ' (get)'
    }
}

user = new User()
user._age = 9
console.log(user._age) // 9

user = new User()
user.age = 11
console.log(user.age) // 11 (get)
user.age = 9
console.log(user.age) // 0 (get)

//
function makeClass(phrase) {
    return class {
        sayHi() {
            console.log(phrase)
        }
    }
}

User = makeClass('hello')
new User().sayHi() // hello