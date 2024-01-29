let now  = new Date();
let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
let date2 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes(), now.getSeconds())

let time = date1.getTime() - date2.getTime()
let hours = time / (1000 * 60 * 60)

console.log(hours)
