let json = '{"name": "john", "age": 30}'
let user = JSON.parse(json)
console.log(typeof json, typeof user) // string object


/** try */
json = '{age: 30}' 
// JSON.parse(json) // SyntaxError: Unexpected token a in JSON at position 1

try {
    JSON.parse(json)
} catch {
    console.log('ERROR')
} // ERROR

try {
    JSON.parse(json)
} catch(e) {
    console.log(e.name, '\n', e.message, '\n', e.stack)
}
// SyntaxError
//  Unexpected token a in JSON at position 1 
//  SyntaxError: Unexpected token a in JSON at position 1
//     at JSON.parse (<anonymous>)
//     at Object.<anonymous> (C:\DEV\workspace\javascript.22.01\5.error\1.try.js:17:10)
//     at Module._compile (node:internal/modules/cjs/loader:1101:14)
//     at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
//     at Module.load (node:internal/modules/cjs/loader:981:32)
//     at Function.Module._load (node:internal/modules/cjs/loader:822:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
//     at node:internal/main/run_main_module:17:47