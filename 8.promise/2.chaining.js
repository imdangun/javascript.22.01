new Promise((resolve, reject) => setTimeout(resolve(1), 1000))
    .then(result => {
        console.log(result)
        return result + 1
    }).then(result => {
        console.log(result)
        return result + 1
    }).then(console.log)