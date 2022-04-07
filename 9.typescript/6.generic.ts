function wrap<T>(value: T) {
    return {value}
}

const output = wrap('hello')
console.log(output) // { value: 'hello' }

//
interface Woman {
    name: string
}

const woman: Woman = {name: 'hera'}
const woman2 = wrap(woman)
console.log(woman2) // { value: { name: 'hera' } }

//
interface Item<T> {
    id: number
    data: T
}

interface Animal {
    name: string
}

interface Place {
    location: string
}

const animalItem: Item<Animal> = {
    id: 1,
    data: {
        name: 'cat'
    }
}

const placeitem: Item<Place> = {
    id: 2,
    data: {
        location: 'seoul'
    }
}

//
type Product<T> = {
    id: number
    data: T
}

//
class Queue<T> {
    list: T[] = []

    get length() {
        return this.list.length
    }

    enqueue(item: T) {
        this.list.push(item)
    }

    dequeue() {
        return this.list.shift()
    }
}

const queue = new Queue<number>()
queue.enqueue(0)
queue.enqueue(1)
const first = queue.dequeue()
const second = queue.dequeue()

console.log(first, second) // 0 1