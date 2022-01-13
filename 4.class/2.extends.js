class Animal {
    constructor(name) {
        this.name = name
    }

    run(speed) {
        this.speed = speed
        console.log(this.name, this.speed, ' run.')
    }

    stop() {
        this.speed = 0
        console.log(this.name, ' stop.')
    }
}

let animal = new Animal('animal')
console.log(animal) // Animal { name: 'animal' }

animal.run(10)      // animal 10  run.
console.log(animal) // Animal { name: 'animal', speed: 10 }
animal.stop()       // animal  stop.
console.log(animal) // Animal { name: 'animal', speed: 0 }


/** extends */
class Duck extends Animal {
    run(speed) {
        this.speed = speed / 10
        console.log(this.name, this.speed, ' run.')
    }

    hide() {
        console.log(this.name, ' hide.')
    }
}

console.log()
let duck = new Duck('duck')
console.log(duck) // Duck { name: 'duck' }

duck.run(10) // duck 1  run.
duck.stop()  // duck  stop.
duck.hide()  // duck  hide.


/** super */
class Rabbit extends Animal {
    stop() {
        super.stop()
        this.hide()
    }

    hide() {
        console.log(this.name, ' hide.')
    }
}

console.log()
new Rabbit('rabbit').stop()
// rabbit  stop.
// rabbit  hide


/** super() */
Rabbit = class extends Animal {
    constructor(name, color) {
       super(name) // super() 는 constructor() 첫줄에 있어야 한다.
       this.color = color
    }
}

console.log(new Rabbit('rabbit', 'black')) // Rabbit { name: 'rabbit', color: 'black' }