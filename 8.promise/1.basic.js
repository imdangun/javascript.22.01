let promise = new Promise((resolve, reject) => resolve('done'))

promise.then(console.log, console.log) // done

promise.then(console.log) // done
promise.catch(console.log)

promise.then(console.log, null) // done

//
promise = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('에러')), 1000)
})

promise.then(result => console.log(result), 
                error => console.log(error)) // Error: 에러

//
new Promise((resolve, reject) => 
    setTimeout(() => resolve('완성'), 2000))
    .finally(() => console.log('promise가 생성되었습니다.')) // promise가 생성되었습니다.
    .then(console.log) // 완성

new Promise((resovle, reject) =>
    setTimeout(() => reject(new Error('미완성')), 3000))
    .finally(() => console.log('프라미스가 생성되었습니다.')) // 프라미스가 생성되었습니다.
    .catch(console.log) // Error: 미완성