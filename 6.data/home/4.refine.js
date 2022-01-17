/* 과제:
refine function 을 만들어라.
- parameter 에서, 중복된 원소를 제거한다.
*/

let user = {name: 'scott'}
let fn = () => 1
let arr = ['ucal', user, 'toby', fn, 'ucal', user, 1, 1, fn]

function refine(arr) {
    return Array.from(new Set(arr))
}

console.log(refine(arr)) // [ 'ucal', { name: 'scott' }, 'toby', [Function: fn], 1 ]