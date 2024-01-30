let date = new Date()
let date1 = new Date(2025, 0, 1)
let date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate())

let time = date1.getTime() - date2.getTime()
let days = time / (1000 * 60 * 60 * 24)

console.log(days)