/** if */
if(true){}

if(false){} else {}

if(undefined) {console.log('!')}
if(null) {console.log('!')}
if(0) {console.log('!')}

if(-1) {console.log('!')} // !


/** ternary */
console.log(true ? 1 : 0) // 1


/** switch */
let val;

switch('boo') {
case 'bar': val = 'bar'; break
case 'baz': val = 'baz'
default: val= 'all right.'
}

console.log(val) // all right