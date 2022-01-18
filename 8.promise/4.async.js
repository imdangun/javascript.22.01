/** async function: return promise */
async function f() {
    return 1
}

f().then(console.log) // 1

f = async function() {
    return Promise.resolve(2)
}

f().then(console.log) // 2


/** await 는 async function 에서 사용한다. */
f = async function() {
    let promise = new Promise((resolve, reject) => setTimeout(() => resolve(3), 1000))
    let result = await promise
    console.log(result)
}

f() // 3

//
class Waiter {
    async wait() {
        return await Promise.resolve('finish')
    }
}

new Waiter().wait().then(console.log) // finish