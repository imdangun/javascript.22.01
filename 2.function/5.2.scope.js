let msg = 'earth'
// let msg // SyntaxError: Identifier 'msg' has already been declared

{
    console.log(msg) // earth
}

{ // local scope
    let msg = 'moon'
    console.log(msg) // moon
}

console.log(msg) // earth