/** factory function */
let makeUser = function(name, age) {
    return {
        name: name,
        age: age
    }
}

console.log(makeUser('doris', 57)) // { name: 'doris', age: 57 }