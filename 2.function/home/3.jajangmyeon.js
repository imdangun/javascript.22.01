/* 과제3:
2.callback.js 의 짜자명 이야기를, => function refactoring 하라.
*/

let chef1 = food => `달콤한 ${food}\n`

let chef2 = food => `매운 ${food}\n`

let waiter = (food, chef) => chef(food)

console.log(waiter('짜장면', chef1), // 달콤한 짜장면
            waiter('짜장면', chef2), // 매운 짜장면
            waiter('짬뽕', chef2))   // 매운 짬뽕