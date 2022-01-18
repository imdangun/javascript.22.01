new Promise((resolve, reject) => {throw new Error(1)})
    .catch(console.log) // Error: 1

new Promise((resolve, reject) => reject(new Error(2)))
    .catch(console.log) // Error: 2

//
new Promise((resolve, reject) => resolve('ok'))
    .then(result => {throw new Error(3)})
    .catch(console.log) // Error: 3

new Promise((resolve, reject) => resolve('ok'))
    .then(result => blabla()) 
    .catch(console.log) // ReferenceError: blabla is not defined

new Promise((resolve, reject) => {throw new Error(4)})
    .catch(console.log) // Error: 4
    .then((result) => console.log('실행', result)) // 실행 undefined

new Promise((resolve, reject) => {throw new Error(5)})
    .catch(err => {
        if(err instanceof URIError) {
        } else {
            console.log('처리할 수 없는 에러입니다.')
            throw err
        }
    }).then(() => console.log('여기는 실행되지 않습니다.'))
    .catch(err => console.log('떠넘긴 에러', err)) // 떠넘긴 에러 Error: 5