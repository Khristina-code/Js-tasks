let date = new Date()
let date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate())
let date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds())

let seconds = date1.getTime() - date2.getTime()
console.log(seconds)