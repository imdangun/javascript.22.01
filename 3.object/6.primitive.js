/** object -> primitive */
let date1 = new Date(2025, 5, 5)
let date2 = new Date(2025, 5, 4)

console.log(date1 - date2) // 86400000


// [Symbol.toPrimitive](hint): string, number, default
let user = {
    name: 'amanda',
    age: 20,
    [Symbol.toPrimitive](hint) {
        return hint == 'string' ? this.name : this.age
    }
}

let user2 = {
    age: 38,
    [Symbol.toPrimitive]() {
        return this.age
    }
}

console.log(`${user}`)    // amanda
console.log(user > user2) // false
console.log(user + 50)    // 70
console.log(user2 + 50)   // 88

/* object -> primitive 시도 순서
1. object[Symbol.toPrimitive](hint) 를 호출한다.
2. 위 메서드가 없고, hint 가 string 이면, toString() || toValueOf 중 하나를 호출한다.
3. 위 메서드가 없고, hint 가 number || default 이면, toValueOf() || toString() 중 하나를 호출한다.
*/
//
user = {
    name: 'neo',
    age: 11,
    toString() {
        return this.name
    }
}

console.log(user + '') // neo

user.valueOf = function() {
    return this.age
}
console.log(user + 100) // 111

//
userStr = JSON.stringify(user)
console.log(userStr) // {"name":"neo","age":11}
console.log(typeof userStr) // string