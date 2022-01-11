const age = 16
// sayAge() // TypeError: sayAge is not a function
// tellAge() // ReferenceError: tellAge is not defined
console.log(sayAge) // undefined

{
    let age = 10

    // sayAge 는 global 에 생긴다.
    // {} LE 객체가 생성될 때, sayAge 에 fn 이 할당된다.
    // 위 fn [[Environment]] 값은 {} le 객체의 주소이다.
    // fn {} 으로 태어난 le는 fn[[Environment]] 값을 복사한다.
    function sayAge() { 
        console.log(age) 
    }

    let tellAge = function() {
        console.log(age)
    }

    sayAge()   // 10
    tellAge()  // 10
} // {} 실행을 마쳐도, sayAge 에서 {} 주소를 참조해서, {} le 객체가 살아남아 있다.

sayAge() // 10
// tellAge() // ReferenceError: tellAge is not defined