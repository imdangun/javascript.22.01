console.log(Date()) // Mon Jan 17 2022 16:29:32 GMT+0900 (대한민국 표준시)

let date = new Date()
console.log(date) // 2022-01-17T07:30:00.398Z
console.log(date.toLocaleDateString()) // 2022. 1. 17.

date = new Date('2025-12-12T13:15:15.999Z') // UTC
console.log(date) // 2025-12-12T13:15:15.999Z

console.log(
    date.getFullYear(), // 2025
    date.getMonth(),    // 11 (0 ~ 11)
    date.getDate(),     // 12
    date.getUTCHours(), // 13
    date.getHours(),    // 22, UTC시각 + 9시간 = 한국시각
    date.getMinutes(),  // 15
    date.getSeconds(),  // 15
    date.getMilliseconds(), // 999
    date.getDay()       // 5 (0 ~ 6, 일 ~ 토)
)


/** timestamp */
console.log(date.getTime()) // 1765545315999
console.log(Date.now())     // 1642405060704

date = new Date(0)
console.log(date) // 1970-01-01T00:00:00.000Z

date = new Date(1000 * 60 * 60 * 24)
console.log(date) // 1970-01-02T00:00:00.000Z

date = new Date(-1000 * 60 * 60 * 24)
console.log(date) // 1969-12-31T00:00:00.000Z