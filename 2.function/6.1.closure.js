const age = 16
// sayAge() // TypeError: sayAge is not a function
// tellAge() // ReferenceError: tellAge is not defined
console.log(sayAge) // undefined

{
    let age = 10
 
    sayAge() // 10
    
    function sayAge() { 
        console.log(age) 
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()   // 10
    tellAge()  // 10
}

sayAge() // 10
// tellAge() // ReferenceError: tellAge is not defined