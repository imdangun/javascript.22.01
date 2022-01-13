/* 과제:
2.function/home/3.jajangmyeon.js 를 객체지향으로 refactoring 하라.
*/

function Food(taste, name) {
    this.taste = taste
    this.name = name
}

function Chef(taste) {   
    this.cook = foodName => new Food(taste, foodName)
}

function Waiter() {
    this.order = (foodName, chef) => chef.cook(foodName)
}

let chef1 = new Chef('달콤한')
let chef2 = new Chef('매운')
let waiter = new Waiter()

waiter.order('짜장면', chef1)
waiter.order('짜장면', chef2)
console.log(waiter.order('짬뽕', chef2)) // Food { taste: '매운', name: '짬뽕' }