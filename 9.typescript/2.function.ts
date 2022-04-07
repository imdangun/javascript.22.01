function sum(a: number, b: number): number {
    return a + b
}

console.log(sum(1, 2)) // 3

// 
// optional parameter
function add(a: number, b: number, isDouble?: boolean) {
    const sum = a + b
    return isDouble ? sum * 2 : sum
}

let result: number = add(1, 2)   // 3
result = add(1, 2, true) // 6
console.log(result) 


//
// function return type 을 명시하지 않으면, return type 이 추론된다.
function greet(name: string, nullable?: boolean) {
    if(nullable) return null
    else return `Hello, ${name}.`
}

let greeting = greet('cain') // Hello, cain.
// greeting.replace('a', 'b') // runtime error
greeting?.replace('c', 'a')
// greeting = 1 // error
greeting = greet('cain', true) // null
console.log(greeting)