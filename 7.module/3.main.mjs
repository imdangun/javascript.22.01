import {greet, add} from './1.named.mjs'
import * as named from './1.named.mjs'
import div from './2.default.mjs'

// > node 3.main.mjs
console.log(greet, add(1, 2))             // 안녕 3
console.log(named.greet, named.add(1, 2)) // 안녕 3

console.log(div(4, 2)) // 2
