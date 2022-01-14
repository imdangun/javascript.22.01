class CoffeeMachine {
    #waterAmount = 0

    constructor(voltage) {
        this.#voltage = voltage
    }

    get waterAmount() {
        return this.#waterAmount + '(get)'
    }

    set waterAmount(waterAmount) {
        this.#waterAmount = waterAmount + 100
    }
}

let machine = new CoffeeMachine()
console.log(machine.waterAmount) // 0(get)

machine.waterAmount = 1
console.log(machine.waterAmount) // 101(get)

//
// machine.#waterAmount = 1 // SyntaxError: Private field '#waterAmount' must be declared in an enclosing class
// machine.#voltage = 110 // SyntaxError: Private field '#voltage' must be declared in an enclosing class
// console.log(machine.#waterAmount, machine.#voltage)  // SyntaxError