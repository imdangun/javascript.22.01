class CoffeeMachine {
    waterAmount = 0

    constructor(voltage) {
        this.voltage = voltage
    }
}

let machine = new CoffeeMachine(220)
console.log(machine.waterAmount, machine.voltage) // 0 220

machine.waterAmount = 1
machine.voltage = 110
console.log(machine.waterAmount, machine.voltage) // 1 110

//
CoffeeMachine = class {
    _waterAmount = 0

    constructor(voltage) {
        this._voltage = voltage
    }

    get waterAmount() {
        return this._waterAmount + '(get)'
    }

    set waterAmount(waterAmount) {
        this._waterAmount = waterAmount + 100
    }

    get voltage() {
        return this._voltage + '(get)'
    }
}

console.log()
machine = new CoffeeMachine(220)
console.log(machine.waterAmount, machine.voltage) // 0(get) 220(get)

machine.waterAmount = 1
console.log(machine.waterAmount) // 101(get)

//
class MegaMachine extends CoffeeMachine {
    print() {
        console.log(this.waterAmount, this.voltage)        
    }
}

new MegaMachine(200).print() // 0(get) 200(get)

//
machine._waterAmount = 1
machine._voltage = 110
console.log(machine._waterAmount, machine._voltage) // 1 100