let a = 1
// let msg // SyntaxError: Identifier 'msg' has already been declared

{
    console.log(a) // 1
}

{ // local scope
    let a = 2
    console.log(a) // 2
}

console.log(a) // 1