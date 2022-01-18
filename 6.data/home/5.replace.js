let user = {
    name: 'john',
    age: 12
}

let user2 = {
    name: 'abel',
    age: 50
}

// 과제: 15번 줄의 결과가 나오도록, statment 하나를 추가하라.
let {name, age} = user2;

[user.name, user.age] = [name, age]
console.log(user) // { name: 'abel', age: 50 }